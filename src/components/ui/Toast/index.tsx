import React from 'react'
import { Toast as StoreUIToast, SuspenseSSR } from '@vtex/store-ui'
import type { FC } from 'react'
import { useToast } from '@vtex/gatsby-theme-store/src/sdk/toast/useToast'

const Toast: FC = () => <StoreUIToast {...useToast()} />

const LazyToast: FC = () => (
  <SuspenseSSR fallback={null}>
    <Toast />
  </SuspenseSSR>
)

export default LazyToast
