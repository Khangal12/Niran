import "./my-comment.js";
import "./comment.js";

class Detail extends HTMLElement {
  constructor() {
    super();
    this._id = this.getAttribute("id");
    this._artist = this.getAttribute("artist");
    this._img = this.getAttribute("img");
    this._year = this.getAttribute("year");
    this._reward = this.getAttribute("reward");
    this._count = this.getAttribute("count");
    this.render();
    this.fetchComments();
  }

  static get observedAttributes() {
    return ["id", "artist", "img", "year", "reward", "count"];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this[name] = newValue;
    this.render();
  }

  get id() {
    return this._id;
  }

  set id(value) {
    this._id = value;
    this.setAttribute("id", value);
  }

  get artist() {
    return this._artist;
  }

  set artist(value) {
    this._artist = value;
    this.setAttribute("artist", value);
  }

  get img() {
    return this._img;
  }

  set img(value) {
    this._img = value;
    this.setAttribute("img", value);
  }

  get year() {
    return this._year;
  }

  set year(value) {
    this._year = value;
    this.setAttribute("year", value);
  }

  get reward() {
    return this._reward;
  }

  set reward(value) {
    this._reward = value;
    this.setAttribute("reward", value);
  }

  get count() {
    return this._count;
  }

  set count(value) {
    this._count = value;
    this.setAttribute("count", value);
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
              <my-star count="${this.count}">
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
    document.addEventListener("click", this.handleClickOutside);
  }

  showComment() {
    const commentPanel = document.querySelector("#panel");
    commentPanel.classList.toggle("show");
  }

  handleClickOutside = (event) => {
    const panel = this.querySelector("#panel");
    if (!panel.contains(event.target)) {
      panel.classList.remove("show");
    }
  };

  disconnectedCallback() {
    document.removeEventListener("click", this.handleClickOutside);
  }
}

customElements.define("my-detail", Detail);
