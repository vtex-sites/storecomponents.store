import React, { lazy } from 'react'
import { MinicartButton, SuspenseSSR } from '@vtex/store-ui'
import type { FC } from 'react'

const MinicartClient = lazy(() => import('./Minicart.client'))

const noop = () => {}

const Minicart: FC = () => (
  <SuspenseSSR fallback={<MinicartButton value={0} onClick={noop} />}>
    <MinicartClient />
  </SuspenseSSR>
)

export default Minicart
