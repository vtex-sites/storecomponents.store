import React from 'react'
import type { FC } from 'react'
import { useProfile } from '@vtex/gatsby-theme-store/src/sdk/session/useProfile'

import Anonymous from './Anonymous'
import Authenticated from './Authenticated'

const LoginProfile: FC = () => {
  const profile = useProfile()
  const name = profile?.firstName?.value ?? profile?.email?.value ?? ''
  const isAuthenticated = profile?.isAuthenticated?.value === 'true'

  return isAuthenticated ? <Authenticated name={name} /> : <Anonymous />
}

export default LoginProfile
