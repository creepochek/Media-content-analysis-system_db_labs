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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "eeab5b8af829f316438ae71e0376c8cf"
  },
  {
    "url": "assets/css/0.styles.738cb8b9.css",
    "revision": "2244d6752b0af2c2dff36e08df5b7bc8"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.49eeb666.js",
    "revision": "2ae796dd2310b40a4cfbc24a31656e96"
  },
  {
    "url": "assets/js/11.2e2cae45.js",
    "revision": "3d36c5595970b06ed83f64bf42b815c8"
  },
  {
    "url": "assets/js/12.88ee5f3f.js",
    "revision": "600c05a2b40b75b260432b89ba73d358"
  },
  {
    "url": "assets/js/13.481527ad.js",
    "revision": "dc8f619c62edf15c183c3c09ac9efc9b"
  },
  {
    "url": "assets/js/14.1cdf4227.js",
    "revision": "0b2f7e5b881a20d0ac99680f87343f8a"
  },
  {
    "url": "assets/js/15.6b79728a.js",
    "revision": "20edec54636b7ee75dede4bf2a649092"
  },
  {
    "url": "assets/js/16.8692c135.js",
    "revision": "e1023c834b114d096444a118a4c8d88a"
  },
  {
    "url": "assets/js/17.87ebbed6.js",
    "revision": "efc2cee9777167b7114805a166d1720b"
  },
  {
    "url": "assets/js/18.82570a20.js",
    "revision": "34b122837fe3594df263791caefff2af"
  },
  {
    "url": "assets/js/19.a8d9201c.js",
    "revision": "313b15466edb5f32b0f6907765d495d9"
  },
  {
    "url": "assets/js/2.34e09f60.js",
    "revision": "298608105e39718524d0d9abd035e169"
  },
  {
    "url": "assets/js/20.e56b001b.js",
    "revision": "c442aba66f52dfb97b7c476e8a034cb3"
  },
  {
    "url": "assets/js/21.bc54ee02.js",
    "revision": "1d6fe5ae8084a7851ef14172594d1209"
  },
  {
    "url": "assets/js/22.cf1e7f07.js",
    "revision": "70b22d3fbecfd1de65258c84b6253411"
  },
  {
    "url": "assets/js/23.c610b5d6.js",
    "revision": "4addbbc790110b650f601986719604d5"
  },
  {
    "url": "assets/js/24.50bb6a01.js",
    "revision": "bec5e8f2119d5517453d3dffc833b4a8"
  },
  {
    "url": "assets/js/26.ccff375d.js",
    "revision": "9299f6a99acebce9e379fc023a02773a"
  },
  {
    "url": "assets/js/3.891b5186.js",
    "revision": "806d89c6e73fa1b25ad8821e1725f995"
  },
  {
    "url": "assets/js/4.b3cba43d.js",
    "revision": "ff77fd5483a484f04c73744ef2f8f480"
  },
  {
    "url": "assets/js/5.8724af66.js",
    "revision": "71d1b1c118c3da0c8df1f7403403ed08"
  },
  {
    "url": "assets/js/6.ef7de2cf.js",
    "revision": "97fbabea8589be78d619715545639fee"
  },
  {
    "url": "assets/js/7.166df41d.js",
    "revision": "8cb4661c0f159a84d3cb5ad3e3af3bec"
  },
  {
    "url": "assets/js/8.4aba3471.js",
    "revision": "a27999c3c933fbf60827de0f4a4be8cc"
  },
  {
    "url": "assets/js/9.056771ac.js",
    "revision": "ad61d07caea577976496801f31afa8bf"
  },
  {
    "url": "assets/js/app.9db4ac6a.js",
    "revision": "4a248b04045371041d9181ba60d041d9"
  },
  {
    "url": "conclusion/index.html",
    "revision": "809fc508d29f26b72e09dff20147c5f2"
  },
  {
    "url": "design/index.html",
    "revision": "eae69b60992cd10f875716795c558a6c"
  },
  {
    "url": "index.html",
    "revision": "2cfc0ac0adcb47f2cd46b1aacbb3b588"
  },
  {
    "url": "intro/index.html",
    "revision": "a37a901efb74100bebf721a9cce5c1a2"
  },
  {
    "url": "license.html",
    "revision": "c6ae94487788630ac26fdec72cecb7f2"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "f587de238a44367f0936c20f0096beb1"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "8edcfdd7238b4d3a711cbbba333d0bf6"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "3e6527fbc82d8fdb2901b70e5a8522a5"
  },
  {
    "url": "software/index.html",
    "revision": "f398ce714907bfde93f820549f9ce8cc"
  },
  {
    "url": "test/index.html",
    "revision": "0c3ec21e8c574aa825a07fce311da146"
  },
  {
    "url": "use cases/index.html",
    "revision": "1f3d95c10e0b6026b1ec718c2795508c"
  }
].concat(self.__precacheManifest || []);
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
