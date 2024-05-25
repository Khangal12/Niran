const loginForm = document.getElementById("loginForm");
const loginBody = document.getElementById("loginPanel");
const logout = document.getElementById("log-out");
loginForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    try {
        const response = await fetch("http://127.0.0.1:3000/login", {
            method: "POST",
            cache:"no-cache",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email: username, pwd: password })
        });
        if (!response.ok) {
           alert("Login Failed");
            return;
          }
          else{
            alert("Login succesfull");
            const data = await response.json();
            const userId = data.user_id
            localStorage.setItem('userId', userId);
            loginBody.classList.add("hidden"); // Login hiigdeh uyed login hesgiig hidelah
          }
    
    } catch (error) {
        console.error("Error during login:", error);
    }
});
logout.addEventListener('click', () => {
    localStorage.removeItem('userId');
    alert('Logged out successfully');
});
