import React, { FC } from 'react'
import { Skeleton } from '@vtex/store-ui'

const AsyncInfoPreview: FC = () => (
  <>
    <Skeleton height="23px" />
    <Skeleton height="50px" />
    <Skeleton height="23px" />
    <Skeleton height="100px" />
    <Skeleton height="50px" />
    <Skeleton height="23px" />
    <Skeleton height="50px" />
    <Skeleton height="23px" />
  </>
)

export default AsyncInfoPreview
