/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "8015f2d0e482cec6c0dcd65d33c216bd"
  },
  {
    "url": "assets/css/2.styles.4d515d21.css",
    "revision": "af6cf761566dec008d0c78772143432e"
  },
  {
    "url": "assets/css/3.styles.90f01f4c.css",
    "revision": "df7c35ec8029dbbde0735a45f875eaf7"
  },
  {
    "url": "assets/css/5.styles.d0864d0a.css",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "assets/css/styles.fe9d4b17.css",
    "revision": "5b3f7d6a5a2951ec79139c9aca7c1fd9"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.86bec7be.js",
    "revision": "9be0c25e1d4193878b6147f0ab1f5f90"
  },
  {
    "url": "assets/js/2.4d515d21.js",
    "revision": "aa0c208aa79557461278f1f997e005cf"
  },
  {
    "url": "assets/js/3.90f01f4c.js",
    "revision": "85dc843b4b11beeada287f1a8ffa3df8"
  },
  {
    "url": "assets/js/4.41c9057f.js",
    "revision": "c9dd7332a60dec16a91f12cc989dedf9"
  },
  {
    "url": "assets/js/5.d0864d0a.js",
    "revision": "3c3f1bfbb365baa6225dd027c4606be0"
  },
  {
    "url": "assets/js/6.fadcb86e.js",
    "revision": "228ef5bdcbb296a9d50ee98b9a0ed1eb"
  },
  {
    "url": "assets/js/app.fe9d4b17.js",
    "revision": "d1ec44bc6917dd4264457619d3c0b258"
  },
  {
    "url": "date.html",
    "revision": "1762d7342f3275f00834e624c6bec823"
  },
  {
    "url": "index.html",
    "revision": "08c6fa7cff07091b73373c80458c05a4"
  },
  {
    "url": "logo.png",
    "revision": "a53179ca13039218c56cb6bce42e3aa6"
  },
  {
    "url": "mcalendar.html",
    "revision": "8f41209dc3c886b8d5a8125fb34a12bc"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
