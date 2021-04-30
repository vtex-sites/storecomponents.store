import React, { lazy } from 'react'
import { SuspenseSSR } from '@vtex/store-ui'
import type { FC, ComponentPropsWithoutRef } from 'react'

import Button from './Button'

const BuyButtonClient = lazy(() => import('./BuyButton.client'))

type Props = ComponentPropsWithoutRef<typeof BuyButtonClient>

const BuyButton: FC<Props> = (props) => (
  <SuspenseSSR fallback={<Button disabled />}>
    <BuyButtonClient {...props} />
  </SuspenseSSR>
)

export default BuyButton
