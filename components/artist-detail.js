class Detail extends HTMLElement{
    constructor() {
        super();
        this.id = this.getAttribute("id")
        this.artist = this.getAttribute("artist");
        this.img = this.getAttribute("img");
        this.year = this.getAttribute("year");
        this.reward = this.getAttribute("reward");
        this.count = this.getAttribute("count");
        this.comment1 = this.getAttribute("comment1");
        this.comment2 = this.getAttribute("comment2");
        this.render();
    }
    //nomio test
    render() {
        this.innerHTML = `
        <section class="info">
      <img
        src="${this.img}"
        width="100"
        height="80"
        alt="makeup"
        class="makeupPic"/>
      <article class="artist">
        <h2>
          ${this.artist}
          <div class="star">
            <my-star count="${this.count}">
        </div>
        </h2>
        <p><bold>Туршлага:</bold>${this.year} жил</p>
        <p>
          <bold>Шагнал:</bold>${this.reward}
        </p>
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
          <p>
           ${this.comment1}
          </p>
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

          <p>
            ${this.comment2}
          </p>
          <hr />
          <section class="orderButton flexrow">
            <button class="mainArtist">Сэтгэгдэл өгөх</button>
            <a href="/Pages/orders.html?id=${this.id}"><button class="mainArtist">Цаг авах</button></a>
          </section>
        </article>
      </article>
      </section>`;
    }
}
customElements.define("my-detail",Detail);