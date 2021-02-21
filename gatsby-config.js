require('dotenv').config({
  path: `${__dirname}/vtex.env`,
})

const environment = process.env.GATSBY_VTEX_ENVIRONMENT
const workspace = process.env.GATSBY_VTEX_IO_WORKSPACE

const STORE_ID = 'storecomponents'

const {
  NODE_ENV,
  URL = `https://${STORE_ID}.vtex.app`,
  DEPLOY_PRIME_URL = URL,
  CONTEXT: ENV = NODE_ENV,
} = process.env

const allowedHosts = ['storecomponents.vtex.app', 'storetheme.vtex.com']
const isProduction = ENV === 'production'
const siteUrl = isProduction ? URL : DEPLOY_PRIME_URL

const transformHeaders = (headers, path) => {
  const outputHeaders = [
    // Security
    'X-XSS-Protection: 1; mode=block',
    'X-Content-Type-Options: nosniff',
    'Referrer-Policy: same-origin',
  ]

  if (!path.includes('/account')) {
    outputHeaders.push('X-Frame-Options: DENY')
  }

  return outputHeaders.concat(headers)
}

module.exports = {
  siteMetadata: {
    title: 'Store Theme | VTEX Base Store',
    description: 'A sample store using the best of Gatsby and VTEX',
    titleTemplate: '%s | Store Theme',
    author: 'Emerson Laurentino',
    siteUrl,
  },
  flags: {
    PRESERVE_WEBPACK_CACHE: true,
    FAST_DEV: false,
    DEV_SSR: false,
  },
  plugins: [
    {
      resolve: `@vtex/gatsby-source-vtex`,
      options: {
        tenant: STORE_ID,
        environment,
        workspace,
      },
    },
    {
      resolve: '@vtex/gatsby-theme-store',
      options: {
        storeId: STORE_ID,
        locales: ['en', 'pt'],
        defaultLocale: 'en',
      },
    },
    {
      resolve: '@vtex/gatsby-plugin-google-tag-manager',
      options: {
        gtmId: 'GTM-TT2MDM3',
        allowedHosts,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Store Theme - VTEX Base Store',
        short_name: 'Store Theme',
        start_url: '/',
        icon: 'src/images/icon.png',
        background_color: '#0a034e',
        theme_color: '#0a034e',
        display: 'minimal-ui',
      },
    },
    {
      resolve: '@vtex/gatsby-plugin-cms',
      options: {
        tenant: STORE_ID,
        workspace,
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        resolveEnv: () => ENV,
        env: {
          production: {
            policy: [
              {
                userAgent: '*',
                allow: '/',
                disallow: ['/checkout/*'],
              },
            ],
          },
          'branch-deploy': {
            policy: [{ userAgent: '*', disallow: ['/'] }],
            sitemap: null,
            host: null,
          },
          'deploy-preview': {
            policy: [{ userAgent: '*', disallow: ['/'] }],
            sitemap: null,
            host: null,
          },
        },
      },
    },
    {
      resolve: 'gatsby-plugin-netlify',
      options: {
        headers: {
          '/preview': [
            'Content-Security-Policy: frame-src https://*.myvtex.com/',
          ],
        },
        transformHeaders,
        mergeSecurityHeaders: false,
        generateMatchPathRewrites: true,
      },
    },
    {
      resolve: '@vtex/gatsby-plugin-nginx',
      options: {
        transformHeaders,
      },
    },
  ],
}
