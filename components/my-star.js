class Star extends HTMLElement {
  constructor() {
    super();
    this.count = parseInt(this.getAttribute("count"));
    this.render();
  }

  render() {
    this.innerHTML = `
            <div class="star">
                ${this.generateStars()}
            </div>
        `;
  }
  generateStars() {
    let starsHtml = "";
    for (let i = 0; i < 5; i++) {
      if (i < this.count) {
        starsHtml += '<i class="fa fa-star checked"></i>';
      } else {
        starsHtml += '<i class="fa-regular fa-star"></i>';
      }
    }
    return starsHtml;
  }

  connectedCallback() {}
}

customElements.define("my-star", Star);
