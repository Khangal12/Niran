class OrderPay extends HTMLElement{
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
        <section class=" orders-section flexrow">
        

        <article class="artist flexcol"><img
          src="${this.img}"
          alt="makeup"
          class="makeupPic"
        />
        <P>Таны сонгосон артист</P>
        <h2>${this.artist}</h2>
          <div class="star flexrow">
                <my-star count="${this.count}">
          </div>          
          </article>
         
         
          <div class="info">
          <p> <b>Туршлага:</b>${this.year} жил</p>
        <p><b>Шагнал:</b>${this.reward}</p>
       
 
        <div class="orderBtn">
            <button class="order-day">Өдөр сонгох<i class="fas fa-chevron-down"></i></button>
        </div>
        <div class="hours flexcol">
            <div class=" flexrow">
                <button class="order-hour">09:00</button>
                <button class="order-hour">10:00</button>
                <button class="order-hour">11:00</button>
                <button class="order-hour">12:00</button>
            </div>
            <div class="flexrow">
                <button class="order-hour">13:00</button>
                <button class="order-hour">14:00</button>
                <button class="order-hour">15:00</button>
                <button class="order-hour">16:00</button>
            </div>
            <button class="verify-btn">Баталгаажуулах</button>
        </div></div>
            

        </article>
      </section>`;
    }
}
customElements.define("my-order",OrderPay);