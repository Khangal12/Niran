export default class Item { 

    constructor(itemObj) { 
        this.artist = itemObj.artist;
        this.img = itemObj.img
        this.type = itemObj.type;
        this.part = itemObj.part;
    }

    Render() { 
       return `<article class="makeupPic item">
       <img src=${this.img} alt="niran" />
       <h3>Артист ${this.artist}</h3>
       <div class="star">
         <i class="fa fa-star checked"></i>
         <i class="fa fa-star checked"></i>
         <i class="fa fa-star checked"></i>
         <i class="fa-regular fa-star"></i>
         <i class="fa-regular fa-star"></i>
       </div>
     </article>`
    }
}