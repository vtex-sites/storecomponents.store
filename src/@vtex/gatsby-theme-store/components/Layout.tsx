import React, { Fragment, lazy } from 'react'
import type { FC } from 'react'
import { SuspenseViewport } from '@vtex/store-ui'

import Header from '../../../components/common/Header'

const loader = () => import('../../../components/common/Footer')

const Footer = lazy(loader)

const Layout: FC = ({ children }) => (
  <Fragment>
    <Header />
    {children}
    <SuspenseViewport fallback={null} preloader={loader}>
      <Footer />
    </SuspenseViewport>
  </Fragment>
)

export default Layout
