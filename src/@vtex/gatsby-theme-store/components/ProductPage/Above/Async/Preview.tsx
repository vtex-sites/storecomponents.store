import { Skeleton } from '@vtex/store-ui'
import React from 'react'
import type { FC } from 'react'

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
