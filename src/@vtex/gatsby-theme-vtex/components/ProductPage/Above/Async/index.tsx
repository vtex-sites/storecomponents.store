import React, { FC } from 'react'
import { useAsyncProduct } from '@vtex/gatsby-theme-vtex/src/components/ProductPage/useAsyncProduct'
import { useBestSeller } from '@vtex/gatsby-theme-vtex/src/sdk/product/useBestSeller'
import { useSku } from '@vtex/gatsby-theme-vtex/src/sdk/product/useSku'
import { Divider } from '@vtex/store-ui'

import BuyButton from '../../../BuyButton'
import Offer from './Offer'

interface Props {
  slug: string
}

const Async: FC<Props> = ({ slug }) => {
  const { product }: any = useAsyncProduct({ slug })
  const sku: any = useSku(product)
  const { commercialOffer } = useBestSeller(sku)

  if (product === null || sku === null) {
    return null
  }

  return (
    <>
      <Offer variant="productDetails" commercialOffer={commercialOffer} />

      <Divider />

      <BuyButton sku={sku} />
    </>
  )
}

export default Async
