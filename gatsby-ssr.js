import React from 'react'

exports.onRenderBody = ({
  setHeadComponents,
}) => {
  setHeadComponents([
    <link
      key='preconnect-google-analytics'
      rel='preconnect'
      href='https://www.google-analytics.com/'
      crossOrigin="true"
    />
  ])
}
