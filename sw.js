// Service worker: a small script the browser runs in the background for this app.
// Some versions of Chrome only offer "Install app" if one exists.
// This one does nothing special: every request goes straight to the internet
// as normal, so you always get the latest version you uploaded to GitHub.
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", event => event.waitUntil(self.clients.claim()));
self.addEventListener("fetch", event => event.respondWith(fetch(event.request)));
