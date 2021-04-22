import React, { lazy } from 'react'
import { MinicartButton, SuspenseSSR } from '@vtex/store-ui'
import type { FC } from 'react'

const MinicartClient = lazy(() => import('./Minicart.client'))

const Minicart: FC = () => (
  <SuspenseSSR fallback={<MinicartButton value={0} />}>
    <MinicartClient />
  </SuspenseSSR>
)

export default Minicart
