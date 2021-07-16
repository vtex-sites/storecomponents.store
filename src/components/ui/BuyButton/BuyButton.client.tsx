import { useBuyButton } from '@vtex/gatsby-theme-store'
import React from 'react'
import type { FC } from 'react'
import type { SKU, Product } from '@vtex/gatsby-theme-store'

import Button from './Button'

interface Props {
  sku: SKU | undefined | null
  product: Product | undefined | null
}

const BuyButton: FC<Props> = ({ sku, product }) => {
  const { loading, ...props } = useBuyButton({
    sku,
    quantity: 1,
    product,
  })

  return <Button data-testid="addToCart" {...props} />
}

export default BuyButton
