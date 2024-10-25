// Helper function to show alerts
function showAlert(message, type = "danger") {
  alert(message);
}

// Signup function
function signup() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (!username || !password) {
    showAlert("Please enter both username and password.");
    return;
  }

  const users = JSON.parse(localStorage.getItem("users")) || [];

  // Check if the username already exists
  const existingUser = users.find((user) => user.username === username);
  if (existingUser) {
    showAlert("Username already exists, please choose another one.");
    return;
  }

  // Add new user
  users.push({ username, password });
  localStorage.setItem("users", JSON.stringify(users));

  showAlert("Signup successful! Redirecting to login...", "success");
  setTimeout(() => {
    window.location.href = "login.html";
  }, 1000);
}

// Login function
function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (!username || !password) {
    showAlert("Please enter both username and password.");
    return;
  }

  const users = JSON.parse(localStorage.getItem("users")) || [];

  // Check if user exists
  const user = users.find(
    (user) => user.username === username && user.password === password
  );
  if (!user) {
    showAlert("Invalid username or password.");
    return;
  }

  // Store the logged-in user in localStorage
  localStorage.setItem("loggedInUser", JSON.stringify(user));

  showAlert("Login successful! Redirecting...", "success");
  setTimeout(() => {
    window.location.href = "index.html"; // Redirect to homepage after login
  }, 1000);
}

// Check if user is logged in
function checkAuth() {
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
  if (!loggedInUser) {
    window.location.href = "login.html"; // Redirect to login page if not logged in
  }
}

// Logout function
function logout() {
  localStorage.removeItem("loggedInUser");
  showAlert("Logged out successfully!", "success");
  setTimeout(() => {
    window.location.href = "login.html"; // Redirect to login page after logout
  }, 1000);
}
