const comment = document.getElementById("comment")
const comment_btn = document.getElementById("comment_btn")
comment_btn.addEventListener('click',showComment())
function showComment(){
    console.log("hi")
    comment.style("display:block")
}