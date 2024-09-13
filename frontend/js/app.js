document.addEventListener("DOMContentLoaded", function () {
  // Handle Login Form
  const loginForm = document.getElementById("loginForm");
  if (loginForm) {
    loginForm.addEventListener("submit", async function (event) {
      event.preventDefault();
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;

      const response = await fetch("/api/users/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (response.ok) {
        localStorage.setItem("token", data.token);
        window.location.href = "dashboard.html";
      } else {
        alert(data.message);
      }
    });
  }

  // Handle Signup Form
  const signupForm = document.getElementById("signupForm");
  if (signupForm) {
    signupForm.addEventListener("submit", async function (event) {
      event.preventDefault();
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;
      const role = document.getElementById("role").value;

      const response = await fetch("/api/users/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password, role }),
      });

      const data = await response.json();
      if (response.ok) {
        window.location.href = "index.html";
      } else {
        alert(data.message);
      }
    });
  }

  // Handle Dashboard (if token exists)
  const token = localStorage.getItem("token");
  if (token && document.getElementById("welcome-message")) {
    document.getElementById("welcome-message").innerText = "You are logged in!";
  }

  // Handle Logout
  const logoutBtn = document.getElementById("logoutBtn");
  if (logoutBtn) {
    logoutBtn.addEventListener("click", function () {
      localStorage.removeItem("token");
      window.location.href = "index.html";
    });
  }
});
