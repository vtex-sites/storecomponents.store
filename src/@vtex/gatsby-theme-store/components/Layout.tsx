import React, { Fragment, lazy } from 'react'
import type { FC } from 'react'
import { Toast } from '@vtex/store-ui'
import SuspenseViewport from '@vtex/gatsby-theme-store/src/components/Suspense/Viewport'

import Header from './Header'

const loader = () => import('@vtex/gatsby-theme-store/src/components/Footer')

const Footer = lazy(loader)

const Layout: FC = ({ children }) => (
  <Fragment>
    <Header />
    <Toast />
    {children}
    <SuspenseViewport fallback={null} preloader={loader}>
      <Footer />
    </SuspenseViewport>
  </Fragment>
)

export default Layout
