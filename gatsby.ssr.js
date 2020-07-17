exports.onRenderBody = ({
  setHeadComponents,
}) => {
  setHeadComponents([
    <link
      key='preconnect-googletagmanager'
      rel='preconnect'
      href='https://www.googletagmanager.com/'
      crossOrigin="true"
    />,
    <link
      key='preconnect-google-analytics'
      rel='preconnect'
      href='https://www.google-analytics.com/'
      crossOrigin="true"
    />
  ])
}
