class Comment extends HTMLElement {
  constructor() {
    super();
    this.artistId = this.getAttribute("id");
    this.render();
  }

  render() {
    this.innerHTML = ` 
        <article class="give-comment" id="commentInputField">
            <div class="comment-header ">
                <h3>Сэтгэгдэл өгөх</h3>
                <div class="stars">
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                </div>
                <i class="fa-solid fa-x"></i>
            </div>
            <section class="orderButton flexcol">
                <input id="inputComment" placeholder="Сэтгэгдлээ энд бичнэ үү" class="commentInput"></input>
                <button id="commentBtn">Сэтгэгдэл өгөх</button>
            </section>
        </article>`;

    const commentBtn = this.querySelector("#commentBtn");
    const inputComment = this.querySelector("#inputComment");
    const stars = document.querySelectorAll(".stars i");
    stars.forEach((star, index1) => {
      star.addEventListener("click", () => {
        stars.forEach((star, index2) => {
          if (index1 >= index2) {
            star.classList.add("active");
          } else {
            star.classList.remove("active");
          }
        });
        updateRate();
      });
    });

    function updateRate() {
      const activeStars = document.querySelectorAll(".stars .active").length;
    }

    commentBtn.addEventListener("click", async () => {
      const commentValue = inputComment.value;

      try {
        const userId = localStorage.getItem("userId");
        if (userId) {
          const response = await fetch(
            `http://127.0.0.1:3000/comment/${this.artistId}`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                user_id: userId,
                comment_text: commentValue,
                star_count: activeStars,
                commented_date: new Date(),
              }),
            }
          );
          if (!response.ok) {
            alert("Comment Failed");
            return;
          } else {
            alert("Comment successful");
          }
        } else {
          alert("Login first");
        }
      } catch (error) {
        console.error("Error during comment", error);
      }
    });
  }
}

customElements.define("my-comment", Comment);
