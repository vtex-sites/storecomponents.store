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

if (process.env.NETLIFY) {
  exports.createPages = async ({ actions: { createRedirect } }) => {
    createRedirect({
      fromPath: '/api/*',
      toPath: `/.netlify/functions/api/:splat`,
      statusCode: 200,
    })
  }
}
