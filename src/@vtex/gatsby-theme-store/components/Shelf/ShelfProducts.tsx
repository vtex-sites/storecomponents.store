import Shelf from '@vtex/gatsby-theme-store/src/components/Shelf'
import { ShelfContainer } from '@vtex/store-ui'
import React, { ComponentPropsWithoutRef, FC } from 'react'

type Props = ComponentPropsWithoutRef<typeof Shelf>

const pageSizes = [1, 3, 4]

const ShelfProducts: FC<Props> = (props) => (
  <ShelfContainer>
    <Shelf {...props} pageSizes={pageSizes} />
  </ShelfContainer>
)

export default ShelfProducts
