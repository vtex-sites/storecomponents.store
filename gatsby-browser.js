import { createElement } from 'react'
import GTMProvider from '@vtex/gatsby-theme-vtex/src/sdk/pixel/GTM/index'

export const wrapRootElement = ({ element }) =>
  createElement(GTMProvider, {
    children: element,
    gtmId: 'GTM-TT2MDM3',
  })
