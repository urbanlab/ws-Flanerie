const staticName = "flanerie-panoptic-1.0"
const assets = [
    "/",
    "/index.html",
    "/pano.css",
    "/pano.js",
    "/libs/feather.min.js",
    "/libs/jquery-3.7.1.min.js",
    "/libs/js.cookie.min.js",
    "/socket.io/socket.io.js",
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticName).then(cache => {
      cache.addAll(assets)
    })
  )
})

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
        caches.match(fetchEvent.request).then(res => {
        return res || fetch(fetchEvent.request)
        })
    )
})