self.addEventListener("install", (e) => {
  console.log("Service Worker: Installed");

  // Create a cache and add assets
  e.waitUntil(
    caches.open("stock").then((cache) => {
      return cache.addAll([
        "/",
        "./images/img1.jpg",
        "./images/img2.jpg",
        "./data.json",
        "./index.html",
        "./manifest.json",
        "./sw.js"
      ]);
    }).catch((err) => {
      console.error("Caching error:", err);
    })
  );
});

self.addEventListener("activate", (e) => {
  console.log("Service Worker: Activated");
  // You can add code to clean up old caches here
});

self.addEventListener("fetch", (e) => {
  console.log("Service Worker: Fetching", e.request.url);

  // Respond with cached data if available, otherwise fetch from network
  e.respondWith(
    caches.match(e.request).then((res) => {
      return res || fetch(e.request);
    }).catch((err) => {
      console.error("Fetch error:", err);
    })
  );
});
