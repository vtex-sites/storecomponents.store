module.exports = {
  siteMetadata: {
    author: 'Emerson Laurentino',
  },
  plugins: [
    {
      resolve: require.resolve('@vtex/gatsby-theme-vtex'),
      options: {
        title: 'Store Theme - VTEX Base Store',
        description: 'A sample store using the best of Gatsby and VTEX',
        prerender: () => ({
          categories: ['25'],
        }),
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
      resolve: require.resolve('gatsby-plugin-google-tagmanager'),
      options: {
        id: "GTM-TKDFD35",
        includeInDevelopment: false,
        defaultDataLayer: { platform: "gatsby" },
      },
    },
    {
      resolve: require.resolve('gatsby-plugin-google-analytics'),
      options: {
        trackingId: "UA-43760863-27",
        head: false,
        anonymize: true,
        respectDNT: true,
        exclude: ["/preview/**"],
        pageTransitionDelay: 0,
        defer: false,
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
        transformHeaders: (headers, path) => {
          const DEFAULT_SECURITY_HEADERS = [
            'X-XSS-Protection: 1; mode=block',
            'X-Content-Type-Options: nosniff',
            'Referrer-Policy: same-origin',
          ]

          return path.includes('/preview')
            ? [...DEFAULT_SECURITY_HEADERS, ...headers]
            : ['X-Frame-Options: DENY', ...DEFAULT_SECURITY_HEADERS, ...headers]
        },
        mergeSecurityHeaders: false,
        generateMatchPathRewrites: true,
      },
    },
  ],
}
