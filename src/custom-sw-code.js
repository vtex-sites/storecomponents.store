/* eslint-disable no-restricted-globals */
const OFFLINE_PAGE_CACHE_NAME = 'offline-page'
const OFFLINE_PAGE = '/offline/simple'

self.addEventListener('install', (event) => {
  event.waitUntil(
    (async () => {
      const cache = await caches.open(OFFLINE_PAGE_CACHE_NAME)

      // Setting {cache: 'reload'} in the new request will ensure that the response
      // isn't fulfilled from the HTTP cache; i.e., it will be from the network.
      await cache.add(new Request(OFFLINE_PAGE, { cache: 'reload' }))
      // 👆🏻 Adding the offline page to the cache
    })()
  )
})

// This is gonna handle failed network requests.
// We're simply returning a cached offline page.
const catchHandler = async ({ event }) => {
  const dest = event.request.destination

  if (dest === 'document') {
    // Getting the offline page from cache.
    const cache = await caches.open(OFFLINE_PAGE_CACHE_NAME)

    return cache.match(OFFLINE_PAGE)
  }

  return Response.error()
}

// `workbox` will be defined in the scope where this code is executed.
// eslint-disable-next-line no-undef
workbox.routing.setCatchHandler(catchHandler)
