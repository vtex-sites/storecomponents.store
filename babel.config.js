module.exports = {
  plugins: [require.resolve('@vtex/gatsby-plugin-graphql/babel')],
  presets: [
    [
      'babel-preset-gatsby',
      {
        targets: {
          browsers: 'supports es6-module and not dead',
        },
      },
    ],
  ],
}
