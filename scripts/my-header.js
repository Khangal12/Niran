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
            <li><a href="/Pages/main.html">Home</a></li>
            <li class="dropdown">
              <a href="#">Makeup <i class="fas fa-chevron-down"></i></a>
              <ul class="dropdown-content">
                <li><a href="/Pages/makeup.html">Гоёлын будалт</a></li>
                <li><a href="/Pages/makeup.html">Хуримын будалт</a></li>
                <li><a href="/Pages/makeup.html">Тайз дэлгэцийн будалт</a></li>
                <li><a href="/Pages/makeup.html">Энгийн будалт</a></li>
              </ul>
            </li>
            <li class="dropdown">
              <a href="#">Artists<i class="fas fa-chevron-down"></i></a>
              <ul class="dropdown-content">
                <li><a href="/Pages/order.html">Топ артист</a></li>
                <li><a href="/Pages/makeup.html">Будалтууд</a></li>
                <li><a href="/Pages/order.html">Артистын мэдээлэл</a></li>
                <li><a href="/Pages/order.html"> Хэрэглэгчийн сэтгэгдэл</a></li>
              </ul>
            </li>
          </ul>
          <a href="/Pages/order.html" class="order-button">Захиалга</a>
        </nav>
      </header>
        `;
    }

    connectedCallback() {
        
    }
}

customElements.define("my-header", Header);

