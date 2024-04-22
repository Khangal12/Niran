class Items{
  constructor(itemObj) {
    this.artist = itemObj.artist;
    this.img = itemObj.img;
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
     </article>`;
  }
}


const urlParams = new URLSearchParams(document.location.search);
const typeParam = urlParams.get("type");
const partParam = urlParams.get("part");
let filteredMakeup;

fetch("https://api.jsonbin.io/v3/b/6624ed9bacd3cb34a83c2119")
  .then((result) => {
    return result.json();
  })
  .then((resultObj) => {
    const rawItems = resultObj.record.products;

    if (typeParam && partParam) {
      filteredMakeup = rawItems.filter(
        (makeup) => makeup.type === typeParam && makeup.part === partParam
      );
    } else if (typeParam && !partParam) {
      filteredMakeup = rawItems.filter((makeup) => makeup.type === typeParam);
    } else {
      filteredMakeup = rawItems;
    }

    const makeupHTMLArray = filteredMakeup.map((itemObj) => {
      const item = new Items(itemObj);
      return item.Render();
    });
    const makeupHTML = makeupHTMLArray.reduce(
      (prev, current) => prev + current
    );

    const makeupBody = document.getElementById("makeup-body");
    if (makeupBody) {
      makeupBody.innerHTML = makeupHTML;
    } else {
      console.log("Element with ID 'makeup-body' not found.");
    }
  })
  .catch((error) => {
    console.log("Fetch error:", error);
  });
