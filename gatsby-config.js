// eslint-disable-next-line global-require
const getStaticPaths = () => require('./staticPaths.json')

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

  if (path.includes('/preview')) {
    outputHeaders.push(
      'Content-Security-Policy: frame-src https://*.myvtex.com/'
    )
  }

  if (!path.includes('/account')) {
    outputHeaders.push('X-Frame-Options: DENY')
  }

  return outputHeaders.concat(headers)
}

module.exports = {
  siteMetadata: {
    author: 'Emerson Laurentino',
    siteUrl,
  },
  plugins: [
    {
      resolve: require.resolve('@vtex/gatsby-theme-vtex'),
      options: {
        title: 'Store Theme - VTEX Base Store',
        description: 'A sample store using the best of Gatsby and VTEX',
        getStaticPaths,
        localizationThemeOptions: {
          messagesPath: './i18n/messages',
          locales: ['en', 'pt'],
          defaultLocale: 'en',
        },
      },
    },
    {
      resolve: require.resolve('gatsby-plugin-manifest'),
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
      // This plugin works in conjunction with the
      // '@vtex/gatsby-theme-vtex' and sources the cms's json files
      resolve: require.resolve('gatsby-source-filesystem'),
      options: {
        path: './src/cms/',
      },
    },
    {
      resolve: require.resolve('gatsby-plugin-robots-txt'),
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
      resolve: require.resolve('gatsby-plugin-netlify'),
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
      resolve: require.resolve('@vtex/gatsby-plugin-vtex-nginx'),
      options: {
        transformHeaders,
      },
    },
  ],
}
