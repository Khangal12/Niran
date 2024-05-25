// Assuming you have 'app' properly defined somewhere in your server code

// In your custom element
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
                <i class="fa-solid fa-x"></i>
            </div>
            <section class="orderButton flexcol">
                <input id="inputComment" placeholder="Сэтгэгдлээ энд бичнэ үү" class="commentInput"></input>
                <button id="commentBtn">Сэтгэгдэл өгөх</button>
            </section>
        </article>`;

        const commentBtn = this.querySelector("#commentBtn");
        const inputComment = this.querySelector("#inputComment");

        commentBtn.addEventListener('click', async () => {
            const commentValue = inputComment.value;

            try {
                const userId = localStorage.getItem('userId');
                if (userId) {
                    const response = await fetch(`http://127.0.0.1:3000/comment/${this.artistId}`, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            user_id: userId,
                            comment_text: commentValue,
                            star_count: 5,
                            commented_date: new Date()
                        })
                    });
                    if (!response.ok) {
                        alert("Comment Failed");
                        return;
                    } else {
                        alert("Comment successful");
                    }
                }
                else{
                    alert("Login first")
                }
            } catch (error) {
                console.error("Error during comment", error);
            }
        });
    }
}

customElements.define("my-comment", Comment);
