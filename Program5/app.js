const routes = {
    home: '<h2>Home</h2><p>Welcome to our PWA!</p>',
    about: '<h2>About</h2><p>This is a simple Progressive Web App.</p>',
    contact: '<h2>Contact</h2><p>Reach us at contact@example.com</p>'
  };
  
  function renderRoute() {
    const hash = location.hash.replace('#', '') || 'home';
    document.getElementById('app').innerHTML = routes[hash] || '<h2>404</h2><p>Page not found.</p>';
  }
  
  window.addEventListener('hashchange', renderRoute);
  window.addEventListener('load', renderRoute);
  
  // Theme toggle
  const toggleBtn = document.getElementById('themeToggle');
  toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
          navigator.serviceWorker.register('/sw.js')
            .then(reg => console.log('Service Worker registered:', reg))
            .catch(err => console.error('Service Worker registration failed:', err));
        });
      }
  });