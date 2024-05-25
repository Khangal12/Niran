import "./my-comment.js";
class Detail extends HTMLElement {
  constructor() {
    super();
    this.id = this.getAttribute("id");
    this.artist = this.getAttribute("artist");
    this.img = this.getAttribute("img");
    this.year = this.getAttribute("year");
    this.reward = this.getAttribute("reward");
    this.count = this.getAttribute("count");
    this.comment1 = this.getAttribute("comment1");
    this.comment2 = this.getAttribute("comment2");
    this.render();
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
              <article class="comment">
                  <h3>Сэтгэгдэл</h3>
                  <div class="user flexrow">
                      <p>user-2024-03-20</p>
                      <div class="star">
                          <i class="fa fa-star checked"></i>
                          <i class="fa fa-star checked"></i>
                          <i class="fa fa-star checked"></i>
                          <i class="fa fa-star checked"></i>
                          <i class="fa-regular fa-star"></i>
                      </div>
                  </div>
                  <p>${this.comment1}</p>
                  <hr/>
                  <div class="user flexrow">
                      <p>user-2024-03-20</p>
                      <div class="star">
                          <i class="fa fa-star checked"></i>
                          <i class="fa fa-star checked"></i>
                          <i class="fa fa-star checked"></i>
                          <i class="fa fa-star checked"></i>
                          <i class="fa fa-star checked"></i>
                      </div>
                  </div>
                  <p>${this.comment2}</p>
                  <hr />
                  <div class="user flexrow">
                      <p>user-2024-03-20</p>
                      <div class="star">
                          <i class="fa fa-star checked"></i>
                          <i class="fa fa-star checked"></i>
                          <i class="fa fa-star checked"></i>
                          <i class="fa fa-star checked"></i>
                          <i class="fa fa-star checked"></i>
                      </div>
                  </div>
                  <p>${this.comment2}</p>
                  <hr />
                  <div class="user flexrow">
                      <p>user-2024-03-20</p>
                      <div class="star">
                          <i class="fa fa-star checked"></i>
                          <i class="fa fa-star checked"></i>
                          <i class="fa fa-star checked"></i>
                          <i class="fa fa-star checked"></i>
                          <i class="fa fa-star checked"></i>
                      </div>
                  </div>
                  <p>${this.comment2}</p>
                  <hr />
                  
                  
              </article>
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
    document.addEventListener("click", this.handleClickOutside); // Listen for clicks outside the detail element
  }

  showComment() {
    const commentPanel = document.querySelector("#panel");
    commentPanel.classList.toggle("show");
  }

  handleClickOutside(event) {
    const commentPanel = document.querySelector("#panel");
    if (!commentPanel.classList.contains("hidden")) {
      // Check if clicked outside the panel and detail element
      commentPanel.classList.add("hidden");
    }
  }

  disconnectedCallback() {
    document.removeEventListener("click", this.handleClickOutside); // Remove event listener on disconnect
  }
}

customElements.define("my-detail", Detail);
