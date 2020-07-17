exports.onRenderBody = ({
  setHeadComponents,
}) => {
  setHeadComponents([
    <link
      key='preconnect-googletagmanager'
      rel='preconnect'
      href='https://www.googletagmanager.com/'
    />,
    <link
      key='preconnect-google-analytics'
      rel='preconnect'
      href='https://www.google-analytics.com/'
    />
  ])
}
