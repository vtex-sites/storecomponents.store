import React, { lazy } from 'react'
import type { FC } from 'react'
import SuspenseSSR from '@vtex/gatsby-theme-store/src/components/Suspense/SSR'

import Anonymous from './Anonymous'

const LoginProfile = lazy(() => import('./LoginProfile'))

const LoginContainer: FC = () => (
  <SuspenseSSR fallback={<Anonymous />}>
    <LoginProfile />
  </SuspenseSSR>
)

export default LoginContainer
