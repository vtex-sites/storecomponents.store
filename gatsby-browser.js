import React from 'react'
import GTMProvider from '@vtex/gatsby-theme-vtex/src/sdk/pixel/GTM/index'

export const wrapRootElement = ({ element }) => (
  <GTMProvider gtmId="GTM-TT2MDM3">{element}</GTMProvider>
)
