class ArtistProducts extends HTMLElement{
    constructor(){
        super();
        this.id = this.getAttribute("id")
        this.artist = this.getAttribute("artist");
        this.makeup = {}; // Initialize makeup as an empty object
        this.makeup.img = this.getAttribute("img");
        this.makeup.count = this.getAttribute("count");
        this.render();
    }
    render(){
        this.innerHTML=`
        <article class="product flexcol">
          <img src="${this.makeup.img}" width="100" height="100" alt="budalt"/>
            <div class="star flexrow">
              <my-star count="${this.makeup.count}">
      </div> 
        <h3>${this.artist}</h3> 
      </article>
      `
    }
}
customElements.define("artist-product",ArtistProducts);