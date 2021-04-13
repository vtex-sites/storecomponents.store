import React, { Fragment, lazy } from 'react'
import type { FC } from 'react'
import SuspenseViewport from '@vtex/gatsby-theme-store/src/components/Suspense/Viewport'

import Toast from '../../../components/Toast'
import Header from './Header'

const loader = () => import('./Footer')

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
