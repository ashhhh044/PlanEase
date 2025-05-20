document.getElementById('loginForm').addEventListener('submit', async function (e) {
  e.preventDefault();

  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();
  const errorBox = document.getElementById('errorBox');

  if (!username || !password) {
    errorBox.textContent = "Please fill in all fields.";
    return;
  }

  try {
    const response = await fetch('/LoginServlet', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}`
    });

    const result = await response.text();

    if (result === 'success') {
      window.location.href = '/dashboard.html';
    } else {
      errorBox.textContent = "Invalid username or password.";
    }
  } catch (err) {
    errorBox.textContent = "An error occurred. Try again later.";
  }
});

// Show/Hide password toggle
document.getElementById('togglePassword').addEventListener('change', function () {
  const passwordInput = document.getElementById('password');
  passwordInput.type = this.checked ? 'text' : 'password';
});
