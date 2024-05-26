class Comments extends HTMLElement{
    constructor(){
        super();
        this.artistId = this.getAttribute("artistId");
        this.userName = this.getAttribute("name");
        this.count = this.getAttribute("count");
        this.text = this.getAttribute("text");
        this.date = this.getAttribute("date")
        this.render();

    }
    render(){
        this.innerHTML = `
        <div class="user flexrow">
                      <p>${this.userName} ${this.date}</p>
                      <my-star count="${this.count}">
                  </div>
                  <p>${this.text}</p>
                  <hr />
                  `
    }
}
customElements.define("test-comment",Comments);