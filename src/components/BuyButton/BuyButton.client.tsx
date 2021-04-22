import { useBuyButton } from '@vtex/gatsby-theme-store'
import React from 'react'
import type { FC } from 'react'
import type { SKU } from '@vtex/gatsby-theme-store'

import Button from './Button'

interface Props {
  sku: SKU | undefined | null
  productName: string
}

const BuyButton: FC<Props> = ({ sku, productName }) => {
  const props = useBuyButton({ sku, quantity: 1, productName })

  return <Button {...props} />
}

export default BuyButton
