import { OfferContainer, Skeleton } from '@vtex/store-ui'
import React from 'react'
import type { FC } from 'react'

const OfferPreview: FC = () => (
  <OfferContainer variant="productSummary">
    <Skeleton height="25px" />
    <Skeleton height="40px" />
    <Skeleton height="45px" />
  </OfferContainer>
)

export default OfferPreview
