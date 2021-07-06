import { Flex, LocalizedLink } from '@vtex/store-ui'
import React from 'react'
import type { FC } from 'react'

const CustomMenu: FC<{ variant?: string }> = ({ variant }) => (
  <Flex as="nav" variant={variant}>
    <LocalizedLink
      data-testid="categoryLink"
      to="/apparel---accessories"
      activeClassName="active"
    >
      Apparel
    </LocalizedLink>
    <LocalizedLink
      data-testid="categoryLink"
      to="/electronics"
      activeClassName="active"
    >
      Electronics
    </LocalizedLink>
    <LocalizedLink to="/about" activeClassName="active">
      About
    </LocalizedLink>
  </Flex>
)

export default CustomMenu
