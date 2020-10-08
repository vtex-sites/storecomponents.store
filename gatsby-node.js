exports.onCreateWebpackConfig = ({ actions: { setWebpackConfig } }) => {
  setWebpackConfig({
    resolve: {
      alias: {
        react: require.resolve('react'),
        'react-dom': require.resolve('react-dom'),
      },
    },
  })
}

exports.createPages = ({ actions: { createRedirect } }) => {
  createRedirect({
    fromPath: '/checkout/*',
    toPath: `https://storetheme.vtex.com/checkout/:splat`,
    statusCode: 200,
  })

  createRedirect({
    fromPath: '/_v/private/auth-server/v1/login',
    toPath: `https://storetheme.vtex.com/_v/private/auth-server/v1/login`,
    statusCode: 200,
  })
}
