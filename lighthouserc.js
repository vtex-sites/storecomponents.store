const { BASE_SITE_URL } = process.env

const server = BASE_SITE_URL
  ? BASE_SITE_URL.replace('.com', '.app')
  : 'http://localhost:9000'

const urls = ['/', '/vintage-phone/p/', '/apparel---accessories/'].map(
  (path) => `${server}${path}`
)

module.exports = {
  ci: {
    collect: {
      url: urls,
      numberOfRuns: 3,
    },
    assert: {
      preset: 'lighthouse:no-pwa',
      assertions: {
        'uses-long-cache-ttl': 'off',
        'is-crawlable': 'off', // preview pages are not crawlable
        'uses-rel-preconnect': 'warn', // somehow lighthouse ci can't find the dns-prefetch tags we are adding
        'categories:pwa': 'off',
        'categories:seo': [
          'error',
          {
            minScore: 0.9,
          },
        ],
        'categories:accessibility': [
          'error',
          {
            minScore: 0.95,
          },
        ],
        'categories:best-practices': [
          'error',
          {
            minScore: 0.95,
          },
        ],
        'categories:performance': [
          'error',
          {
            minScore: 0.95,
          },
        ],
        'unused-javascript': [
          'error',
          {
            maxLength: 10,
          },
        ],
        'largest-contentful-paint': [
          'error',
          {
            maxNumericValue: 3500,
          },
        ],
        'first-contentful-paint': [
          'error',
          {
            maxNumericValue: 2000,
          },
        ],
        interactive: [
          'error',
          {
            maxNumericValue: 3000,
          },
        ],
        'max-potential-fid': [
          'error',
          {
            maxNumericValue: 300,
          },
        ],
        'cumulative-layout-shift': [
          'error',
          {
            maxNumericValue: 0.2,
          },
        ],
        'total-blocking-time': [
          'error',
          {
            maxNumericValue: 200,
          },
        ],
      },
    },
    upload: {
      target: 'temporary-public-storage',
      urlReplacementPatterns: 's/.*app//',
    },
  },
}
