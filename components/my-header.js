import '../scripts/cart.js'
class Header extends HTMLElement {
  constructor() {
    super();
    this.render();
  }

  render() {
    this.innerHTML = `
      <header>
      <div class="header-search flexrow">
        <a href="/Pages/main.html">
          <img
            class="header-logo"
            src="/assets/logo.jpg"
            alt="niran"
            width="100"
            height="60"
        /></a>
        <div class="search-bar flexrow">
          <input class="search" placeholder="Search" />
          <i class="icon-search"></i>
        </div>
        <a id="showLoginBtn"><i class="fa-regular fa-user"></i></a>
      </div>
      <div class="line"></div>
      <nav class="navbar">
        <ul class="nav-links">
          <i class="fa-solid fa-bars"></i>
          <li><a href="/Pages/main.html">Нүүр</a></li>
          <li class="dropdown">
            <a href="#">Будалт <i class="fas fa-chevron-down"></i></a>
            <ul class="dropdown-content">
              <li><a href="/Pages/makeup.html">Гоёлын будалт</a></li>
              <li><a href="/Pages/makeup.html">Хуримын будалт</a></li>
              <li><a href="/Pages/makeup.html">Тайз дэлгэцийн будалт</a></li>
              <li><a href="/Pages/makeup.html">Энгийн будалт</a></li>
            </ul>
          </li>
          <li class="dropdown">
            <a href="#">Артист<i class="fas fa-chevron-down"></i></a>
            <ul class="dropdown-content">
              <li><a href="/Pages/order.html">Топ артист</a></li>
              <li><a href="/Pages/makeup.html">Будалтууд</a></li>
              <li><a href="/Pages/order.html">Артистын мэдээлэл</a></li>
              <li><a href="/Pages/order.html"> Хэрэглэгчийн сэтгэгдэл</a></li>
            </ul>
          </li>
        </ul>
        <div class="last">
        <i class="fa-solid fa-cart-shopping" id="cartIcon"></i>
        <a href="/Pages/order.html" class="order-button">Захиалга</a>
        </div>
      </nav>
      <div id="loginPanel">
        <div id="close"><i class="fa-solid fa-x"></i></div>
        <form id="loginForm">
          <h1>Нэвтрэх хэсэг</h1>
          <div class="form-group">
            <label for="username">Нэр</label>
            <input type="text" id="username" name="username" required />
          </div>
          <div class="form-group">
            <label for="password">Нууц үг</label>
            <input type="password" id="password" name="password" required />
          </div>
          <button id="btn-submit" type="submit">Нэвтрэх</button>
        </form>
        <button id="log-out" class="log-out">Logout</button>
      </div>
      <div id="cartPanel" class="cart-panel">
  <div class="cart-items">
    <h3>
    Таны сонгосон цаг:
    </h3>
    <div id="cartbody">
    </div>
</div>

    </header>
    `;
  }
  connectedCallback() {
    // Add event listener for showing login panel
    const showLoginBtn = this.querySelector("#showLoginBtn");
    showLoginBtn.addEventListener("click", () => this.showLoginPanel());

    // Add event listener for toggling the cart panel
    const cartIcon = this.querySelector("#cartIcon");
    cartIcon.addEventListener("click", () => this.toggleCartPanel());

    // Add event listener for closing login panel
    const closeButton = this.querySelector("#close");
    closeButton.addEventListener("click", () => this.hideLoginPanel());

    // Add event listener for clicks outside of panels
    document.addEventListener("click", (event) => {
      const loginPanel = this.querySelector("#loginPanel");
      const cartPanel = this.querySelector("#cartPanel");

      // Check if the click is outside of the login panel
      if (!loginPanel.contains(event.target) && !showLoginBtn.contains(event.target)) {
        this.hideLoginPanel();
      }

      // Check if the click is outside of the cart panel
      if (!cartPanel.contains(event.target) && !cartIcon.contains(event.target)) {
        this.hideCartPanel();
      }
    });
  }

  showLoginPanel() {
    const loginPanel = this.querySelector("#loginPanel");
    loginPanel.classList.add("show");
  }

  hideLoginPanel() {
    const loginPanel = this.querySelector("#loginPanel");
    loginPanel.classList.remove("show");
  }

  toggleCartPanel() {
    const cartPanel = this.querySelector("#cartPanel");
    cartPanel.classList.toggle("show");
  }

  hideCartPanel() {
    const cartPanel = this.querySelector("#cartPanel");
    cartPanel.classList.remove("show");
  }
}

customElements.define("my-header", Header);