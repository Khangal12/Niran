class Artist extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this._id = null;
    this._artist = null;
    this._img = null;
    this._year = null;
    this._reward = null;
    this._count = null;
  }

  connectedCallback() {
    this.render();
  }

  static get observedAttributes() {
    return ['id', 'artist', 'img', 'year', 'reward', 'count'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue !== newValue) {
      this[name] = newValue;
      this.render();
    }
  }

  async render() {
    try {
      const [fontAwesomeCss, orderCss, mainCss] = await Promise.all([
        fetch('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css').then(response => response.text()),
        fetch('/styles/order.css').then(response => response.text()),
        fetch('/styles/main.css').then(response => response.text())
      ]);

      this.shadowRoot.innerHTML = `
        <style>
          ${fontAwesomeCss}
          ${orderCss}
          ${mainCss}
        </style>
        <section class="art" id="art">
          <article class="artist">
            <img src="${this._img}" width="200" height="200" alt="${this._artist}" />
          </article>
          <article class="inf">
            <div class="name">
              <h2>${this._artist}</h2>
              <div class="star">
                <my-star count="${this._count}"></my-star>
              </div>
            </div>
            <hr />
            <article class="artist_info">
              <p><b>Туршлага:</b> ${this._year} жил</p>
              <p><b>Шагнал:</b> ${this._reward}</p>
              <a href="/Pages/artist.html?id=${this._id}"><button class="more">Дэлгэрэнгүй</button></a>
              <a href="/Pages/orders.html?id=${this._id}"><button class="choise">Сонгох</button></a>
            </article>
          </article>
        </section>
      `;
    } catch (error) {
      console.log(error);
    }
  }

  get id() {
    return this._id;
  }

  set id(value) {
    this._id = value;
    this.setAttribute('id', value);
  }

  get artist() {
    return this._artist;
  }

  set artist(value) {
    this._artist = value;
    this.setAttribute('artist', value);
  }

  get img() {
    return this._img;
  }

  set img(value) {
    this._img = value;
    this.setAttribute('img', value);
  }

  get year() {
    return this._year;
  }

  set year(value) {
    this._year = value;
    this.setAttribute('year', value);
  }

  get reward() {
    return this._reward;
  }

  set reward(value) {
    this._reward = value;
    this.setAttribute('reward', value);
  }

  get count() {
    return this._count;
  }

  set count(value) {
    this._count = value;
    this.setAttribute('count', value);
  }
}

customElements.define("my-artist", Artist);
