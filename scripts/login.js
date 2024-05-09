document.getElementById("showLoginBtn").addEventListener("click", function() {
    var loginPanel = document.getElementById("loginPanel");
    loginPanel.classList.toggle("show"); // css harad uzvel show class dotor naash haruulah code bichsen bga
});

document.getElementById("close").addEventListener('click', function(event) {
    var loginPanel = document.getElementById("loginPanel");
    loginPanel.classList.remove("show"); // show classiig removelej butsad haragdhin boliulah
});