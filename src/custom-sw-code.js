/* eslint-disable no-restricted-globals */

/**
 * This code registers a catch handler into Workbox, to handle failed network
 * requests. As it is, it returns a custom offline error page to users when
 * they are offline.
 *
 * Everything in this file will be appended to the resulting service worker
 * generated during the store's build process (public/sw.js).
 */

const OFFLINE_PAGE_HTML = '/offline/index.html'

// `workbox` will be defined in the scope where this code is executed.
// eslint-disable-next-line no-undef
const offlinePageCacheKey = workbox.precaching.getCacheKeyForURL(
  OFFLINE_PAGE_HTML
)

// This will handle failed network requests.
// We're simply returning a cached offline page.
const catchHandler = async ({ event }) => {
  const dest = event.request.destination

  if (dest === 'document') {
    // Getting the offline page from cache.
    const response = await caches.match(offlinePageCacheKey, {
      ignoreSearch: true,
    })

    return response
  }

  return Response.error()
}

// eslint-disable-next-line no-undef
workbox.routing.setCatchHandler(catchHandler)
