import React, { FC } from 'react'
import Skeleton from 'react-loading-skeleton'

const AsyncInfoPreview: FC = () => (
  <>
    <Skeleton height={23} />
    <Skeleton height={50} />
    <Skeleton height={23} />
    <Skeleton height={100} />
    <Skeleton height={50} />
    <Skeleton height={23} />
    <Skeleton height={50} />
    <Skeleton height={23} />
  </>
)

export default AsyncInfoPreview
