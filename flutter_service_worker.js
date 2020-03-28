'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/index.html": "e6e25ef07ab061f3396db68372e4cc59",
"/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"/assets/assets/dart.jpg": "3e8201d7605d23a2462dd5f731a26897",
"/assets/assets/airtellogo.png": "f9df097d2dc9dcbed4c3d6fab88af472",
"/assets/assets/kengenlogo.jpeg": "00de4b201b693fb510c819f385b4ad20",
"/assets/assets/totallogo.jpg": "d3acdf69e7c95ac5321a7b581dbb21f9",
"/assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"/assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"/assets/AssetManifest.json": "e37731cbf416750221ba9595438f70f0",
"/assets/LICENSE": "964211db6a8b173b1744e68da77ce459",
"/main.dart.js": "bff0813df42a951b80259f2cb48f5732"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
