// Register Service Worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js')
    .then(() => console.log('Service Worker Registered'))
    .catch(err => console.error('SW Registration Failed:', err));
}

// Simple local authentication (demo)
document.getElementById('loginForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();
  const status = document.getElementById('loginStatus');

  // Dummy credentials (you can change or fetch from backend later)
  if (username === 'admin' && password === 'password123') {
    status.style.color = 'green';
    status.textContent = 'Login successful!';
    localStorage.setItem('loggedIn', 'true');
  } else {
    status.style.color = 'red';
    status.textContent = 'Invalid username or password';
  }
});
