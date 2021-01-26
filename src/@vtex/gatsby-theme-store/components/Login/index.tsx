import React from 'react'
import type { FC } from 'react'
import { useProfile } from '@vtex/gatsby-theme-store/src/sdk/session/useProfile'
import SuspenseSSR from '@vtex/gatsby-theme-store/src/components/Suspense/SSR'

import Anonymous from './Anonymous'
import Authenticated from './Authenticated'

const Login: FC = () => {
  const profile = useProfile()
  const name = profile?.firstName?.value ?? profile?.email?.value
  const isAuthenticated = profile?.isAuthenticated?.value === 'true'

  return isAuthenticated ? <Authenticated name={name!} /> : <Anonymous />
}

const LoginContainer: FC = () => (
  <SuspenseSSR fallback={<Anonymous />}>
    <Login />
  </SuspenseSSR>
)

export default LoginContainer
