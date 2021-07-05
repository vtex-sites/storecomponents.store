require('dotenv').config({ path: 'vtex.env' })

const { resolve } = require('path')

const csv2json = require('csvtojson')

const images = require('./src/images/images.config')

const {
  GATSBY_VTEX_ACCOUNT: STORE_ID,
  GATSBY_VTEX_ENVIRONMENT,
  GATSBY_VTEX_IO_WORKSPACE,
  GATSBY_STORE_PROFILING,
  CI: isCI,
} = process.env

const {
  NODE_ENV,
  URL = `https://${STORE_ID}.vtex.app`,
  DEPLOY_PRIME_URL = URL,
  CONTEXT: ENV = NODE_ENV,
} = process.env

const allowedHosts = [`${STORE_ID}.vtex.app`, 'storetheme.vtex.com']
const isProduction = ENV === 'production'
const siteUrl = isProduction ? URL : DEPLOY_PRIME_URL

const unique = (x) => Array.from(new Set(x))

const getSizes = (variants) =>
  unique(
    Object.values(variants)
      .flatMap((variant) =>
        variant.breakpoints.map((width) => [
          `${width}x${Math.ceil(width / variant.aspectRatio)}`,
          `${width}x${Math.floor(width / variant.aspectRatio)}`,
        ])
      )
      .flat()
  )

module.exports = {
  siteMetadata: {
    title: 'Store Theme | VTEX Base Store',
    description: 'A sample store using the best of Gatsby and VTEX',
    titleTemplate: '%s | Store Theme',
    author: 'Emerson Laurentino',
    siteUrl,
  },
  flags: {
    DEV_SSR: true,
    FAST_DEV: true,
    PARALLEL_SOURCING: true,
    PRESERVE_WEBPACK_CACHE: true,
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        src: resolve('./src'),
      },
    },
    {
      resolve: `@vtex/gatsby-source-vtex`,
      options: {
        tenant: STORE_ID,
        environment: GATSBY_VTEX_ENVIRONMENT,
        workspace: GATSBY_VTEX_IO_WORKSPACE,
        getRedirects: () =>
          csv2json({ delimiter: ';' })
            .fromFile('./redirects.csv')
            .then((redirects) =>
              redirects.map(({ fromPath, toPath, type }) => ({
                fromPath,
                toPath,
                isPermanent: type === 'PERMANENT',
                statusCode: type === 'PERMANENT' ? 301 : 302,
              }))
            ),
      },
    },
    {
      resolve: '@vtex/gatsby-theme-store',
      options: {
        profiling: GATSBY_STORE_PROFILING,
        storeId: STORE_ID,
        defaultLocale: 'en',
        locales: ['en', 'pt'],
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
        display: 'standalone',
        cache_busting_mode: 'none',
      },
    },
    {
      resolve: 'gatsby-plugin-offline',
      options: {
        precachePages: [`/offline`],
        appendScript: 'src/custom-sw-code.js',
        workboxConfig: {
          globPatterns: ['**/offline/*'],
        },
      },
    },
    {
      resolve: '@vtex/gatsby-plugin-cms',
      options: {
        tenant: STORE_ID,
        workspace: GATSBY_VTEX_IO_WORKSPACE,
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
      resolve: '@vtex/gatsby-plugin-nginx',
      options: {
        httpOptions: [
          ['merge_slashes', 'off'],
          ['proxy_http_version', '1.1'],
        ],
        serverOptions: isCI
          ? [['resolver', '169.254.169.253']]
          : [['resolver', '8.8.8.8']],
      },
    },
    {
      resolve: 'gatsby-plugin-next-seo',
      options: {
        defer: true,
      },
    },
    {
      resolve: '@vtex/gatsby-plugin-performance',
      options: {
        enableServerRouting: true,
        enableNonBlockingStart: true,
      },
    },
    {
      resolve: 'gatsby-plugin-image',
    },
    {
      resolve: '@vtex/gatsby-plugin-thumbor',
      options: {
        server: isCI
          ? 'http://thumbor.vtex.internal'
          : 'http://thumbor.thumborize.me',
        ...(isProduction && {
          basePath: '/assets',
          sizes: getSizes(images),
        }),
      },
    },
  ],
}
