import "./my-comment.js";
import "./comment.js";

class Detail extends HTMLElement {
  constructor() {
    super();
    this.id = this.getAttribute("id");
    this.artist = this.getAttribute("artist");
    this.img = this.getAttribute("img");
    this.year = this.getAttribute("year");
    this.reward = this.getAttribute("reward");
    this.count = this.getAttribute("count");
    this.render();
    this.fetchComments();
  }
  async fetchComments() {
    try {
      const response = await fetch(`http://127.0.0.1:3000/getcomment/${this.id}`);
      if (!response.ok) {
        throw new Error('Failed to fetch comments');
      }
      const comments = await response.json();
      this.renderComments(comments);
    } catch (error) {
      console.error('Error fetching comments:', error.message);
    }
  }
  renderComments(comments) {
    const commentContainer = this.querySelector(".comment");
    commentContainer.innerHTML = '';
    comments.forEach(comment => {
      const commentDate = new Date(comment.commented_date);
      const formattedDate = commentDate.toLocaleDateString();
      commentContainer.innerHTML += `
        <test-comment artistId="${this.artistId}" name="${comment.user_name}" count="${comment.star_count}" text="${comment.comment_text}" date="${formattedDate}"></test-comment>
      `;
    });
  }
  render() {
    this.innerHTML = `
      <section class="info">
        <img
          src="${this.img}"
          width="100"
          height="80"
          alt="makeup"
          class="makeupPic"
        />
        <article class="artist">
          <h2>
            ${this.artist}
            <div class="star">
              <my-star count="${this.count}"></my-star>
            </div>
          </h2>
          <p><bold>Туршлага:</bold>${this.year} жил</p>
          <p><bold>Шагнал:</bold>${this.reward}</p>
          <article class="comment"></article>
          <section class="orderButton flexrow">
            <button class="mainArtist" id="comment_btn">Сэтгэгдэл өгөх</button>
            <a href="/Pages/orders.html?id=${this.id}"><button class="mainArtist">Цаг авах</button></a>
          </section>
        </article>
      </section>
      <div id="panel" class="hidden">
        <my-comment id="${this.id}"></my-comment>
      </div>
    `;
    const showCommentButton = this.querySelector("#comment_btn");
    const panel = this.querySelector("#panel");
    showCommentButton.addEventListener("click", () => this.showComment());
    this.querySelector("my-comment").addEventListener("commentsFetched", () => this.fetchComments());
    document.addEventListener("click", this.handleClickOutside.bind(this));
  }
  showComment() {
    const commentPanel = this.querySelector("#panel");
    commentPanel.classList.toggle("show");
  }
  handleClickOutside(event) {
    const panel = this.querySelector("#panel");
    const showCommentButton = this.querySelector("#comment_btn");

    if (!panel.contains(event.target) && !showCommentButton.contains(event.target)) {
      panel.classList.remove("show");
    }
  }

  disconnectedCallback() {
    document.removeEventListener("click", this.handleClickOutside.bind(this));
  }
}

customElements.define("my-detail", Detail);
