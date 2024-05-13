
class Artist extends HTMLElement {
    constructor() {
        super();
        this.id = this.getAttribute("id")
        this.artist = this.getAttribute("artist");
        this.img = this.getAttribute("img");
        this.year = this.getAttribute("year");
        this.reward = this.getAttribute("reward");
        this.count = this.getAttribute("count");
        this.render();
    }
    
    render() {
        this.innerHTML = `
        <section class="art" id="art">
        <article class="artist">
          <img src="${this.img}" width="200" height="200" alt="budalt" />
        </article>
        <article class="inf">
          <div class="name">
            <h2>${this.artist}</h2>
            <div class="star">
              <my-star count="${this.count}">
          </div>
          </div>
          <hr />
          <article class="artist_info">
            <p><b>Туршлага:</b> ${this.year} жил</p>
            <p>
              <b>Шагнал:</b> ${this.reward}
            </p>
            <a href="/Pages/artist.html?id=${this.id}"><button class="more">Дэлгэрэнгүй</button></a>
            <a href="/Pages/orders.html?id=${this.id}"><button class="choise">Сонгох</button></a>
          </article>
        </article>
      </section>`;
    }
} 

customElements.define("my-artist", Artist);
