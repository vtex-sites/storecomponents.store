/* eslint-disable no-restricted-globals */
const OFFLINE_PAGE = '/offline/index.html'

// eslint-disable-next-line no-undef
const offlinePageCacheKey = workbox.precaching.getCacheKeyForURL(OFFLINE_PAGE)

// This is gonna handle failed network requests.
// We're simply returning a cached offline page.
const catchHandler = async ({ event }) => {
  const dest = event.request.destination

  if (dest === 'document') {
    // Getting the offline page from cache.
    const response = await caches.match(offlinePageCacheKey)

    return response
  }

  return Response.error()
}

// `workbox` will be defined in the scope where this code is executed.
// eslint-disable-next-line no-undef
workbox.routing.setCatchHandler(catchHandler)
