class OrderPay extends HTMLElement {
  constructor() {
    super();
    this.artistId = this.getAttribute("id");
    this.artist = this.getAttribute("artist");
    this.img = this.getAttribute("img");
    this.year = this.getAttribute("year");
    this.reward = this.getAttribute("reward");
    this.count = this.getAttribute("count");
    this.selectedDay = null;
    this.selectedHour = null;
    this.render();
  }

  connectedCallback() {
    // udur songoh event
    this.querySelector(".day-options").addEventListener("change", (event) => {
      this.selectedDay = event.target.value;
      console.log("Selected day:", this.selectedDay);
      if (this.selectedDay) {
        this.fetchOrders();
      }
    });

    // tsag songoh event
    this.querySelectorAll(".order-hour").forEach((button) => {
      button.addEventListener("click", (event) => {
        this.selectedHour = event.target.value;
        console.log("Selected hour:", this.selectedHour);
        this.querySelectorAll(".order-hour").forEach((btn) =>
          btn.classList.remove("selected")
        );
        event.target.classList.add("selected");
      });
    });

    // zahialga batalgaajuulah event
    this.querySelector(".verify-btn").addEventListener("click", async () => {
      if (this.selectedDay && this.selectedHour) {
        try {
          const user_id = localStorage.getItem("userId");
          if (user_id) {
            const response = await fetch("http://127.0.0.1:3000/order", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                user_id: user_id,
                artist_id: this.artistId,
                hour_id: this.selectedHour,
                day_id: this.selectedDay,
                order_date: new Date().toISOString(),
              }),
            });

            if (!response.ok) {
              const errorMessage = await response.text();
              alert("Order Failed: " + errorMessage);
              return;
            } else {
              alert(`Захиалга амжилттай ${this.selectedDay}-${this.selectedHour}`);
            }
          } else {
            alert("Эхлээд нэвтэрнэ үү.");
          }
        } catch (error) {
          console.error("Error during order:", error);
          alert("Error during order: " + error.message);
        }
      } else {
        alert("Өдөр цагаа хамт сонгон уу");
      }
    });
  }
//tsag haruulah get api
  async fetchOrders() {
    try {
      const response = await fetch(`http://127.0.0.1:3000/getorder/${this.artistId}/${this.selectedDay}`);
      const orders = await response.json();
      console.log("Fetched orders:", orders);

      // get hisni daraa resetleh uchirni umnuh disabled blsonni haragdan
      this.resetHourButtons();
      this.disableHourButtons(orders);
    } catch (error) {
      console.error("Error fetching orders:", error.message);
      // Handle the error
    }
  }
//reset hih function
  resetHourButtons() {
    this.querySelectorAll(".order-hour").forEach((button) => {
      button.disabled = false;
      button.classList.remove("disabled");
    });
  }
//tsag zahialagdsan tohioldold tuunig disable class nemj haruulah
  disableHourButtons(orders) {
    orders.forEach(order => {
      const hourButton = this.querySelector(`.order-hour[value="${order.hour_id}"]`);
      if (hourButton) {
        hourButton.disabled = true;
        hourButton.classList.add("disabled");
      }
    });
  }

  render() {
    this.innerHTML = `
        <section class="orders-section flexrow">
            <article class="artist flexcol">
                <img src="${this.img}" alt="makeup" class="makeupPic" />
                <p>Таны сонгосон артист</p>
                <h2>${this.artist}</h2>
                <div class="star flexrow">
                    <my-star count="${this.count}"></my-star>
                </div>          
            </article>
            <div class="info">
                <p><b>Туршлага:</b> ${this.year} жил</p>
                <p><b>Шагнал:</b> ${this.reward}</p>
                <div class="orderBtn flexrow">
                    <button class="order-day">
                    <select class="day-options">
                        <option value="1">Даваа гараг</option>
                        <option value="2">Мягмар гараг</option>
                        <option value="3">Лхагва гараг</option>
                        <option value="4">Пүрэв гараг</option>
                        <option value="5">Баасан гараг</option>
                        <option value="6">Бямба гараг</option>
                        <option value="7">Ням гараг</option>
                    </select>
                    </button>
                </div>
                <div class="hours flexcol">
                    <div class="flexrow">
                        <button class="order-hour" value="1">09:00</button>
                        <button class="order-hour" value="2">10:00</button>
                        <button class="order-hour" value="3">11:00</button>
                        <button class="order-hour" value="4">12:00</button>
                    </div>
                    <div class="flexrow">
                        <button class="order-hour" value="5">13:00</button>
                        <button class="order-hour" value="6">14:00</button>
                        <button class="order-hour" value="7">15:00</button>
                        <button class="order-hour" value="8">16:00</button>
                    </div>
                    <button class="verify-btn">Баталгаажуулах</button>
                </div>
            </div>
        </section>`;
  }
}

customElements.define("my-order", OrderPay);
