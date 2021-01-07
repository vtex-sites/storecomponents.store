const getStaticPaths = () => require('./staticPaths.json')

require('dotenv').config({
  path: `${__dirname}/vtex.env`,
})

const environment = process.env.GATSBY_VTEX_ENVIRONMENT
const workspace = process.env.GATSBY_VTEX_IO_WORKSPACE

const STORE_ID = 'storecomponents'

const {
  NODE_ENV,
  URL: NETLIFY_SITE_URL = 'https://faststore.netlify.app/',
  DEPLOY_PRIME_URL: NETLIFY_DEPLOY_URL = NETLIFY_SITE_URL,
  CONTEXT: NETLIFY_ENV = NODE_ENV,
} = process.env

const isNetlifyProduction = NETLIFY_ENV === 'production'
const siteUrl = isNetlifyProduction ? NETLIFY_SITE_URL : NETLIFY_DEPLOY_URL

const transformHeaders = (headers, path) => {
  const outputHeaders = [
    // Security
    'X-XSS-Protection: 1; mode=block',
    'X-Content-Type-Options: nosniff',
    'Referrer-Policy: same-origin',
    'Set-Cookie: VtexStoreVersion=v2; Max-Age=86400',
  ]

  if (!path.includes('/account')) {
    outputHeaders.push('X-Frame-Options: DENY')
  }

  return outputHeaders.concat(headers)
}

module.exports = {
  siteMetadata: {
    title: 'Store Theme - VTEX Base Store',
    description: 'A sample store using the best of Gatsby and VTEX',
    author: 'Emerson Laurentino',
    siteUrl,
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
        getStaticPaths,
        locales: ['en', 'pt'],
        defaultLocale: 'en',
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
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        resolveEnv: () => NETLIFY_ENV,
        env: {
          production: {
            policy: [{ userAgent: '*' }],
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
