import { Box, Flex, Grid, RichMarkdown } from '@vtex/store-ui'
import React from 'react'
import type { FC } from 'react'

import BoxIcon from '../../icons/Box'
import CouponIcon from '../../icons/Coupon'
import DeliveryIcon from '../../icons/Delivery'
import StoreIcon from '../../icons/Store'
import dealHtml from './deal.md'
import deliveryHtml from './delivery.md'
import freeShippingHtml from './free-shipping.md'
import pickupHtml from './pickup.md'

const FullWidthContainer: FC = ({ children }) => (
  <Box sx={{ width: '100%' }}>{children}</Box>
)

const RowItemContainer: FC = ({ children }) => (
  <Flex
    variant="deal-row-item-container"
    sx={{
      alignItems: 'center',
      flexDirection: 'column',
      paddingTop: '1rem',
    }}
  >
    {children}
  </Flex>
)

const MAX_ITEMS = [1, 4]

const RichTextRow: FC = () => (
  <FullWidthContainer>
    <Box backgroundColor="#6b7381">
      <Grid gap={2} columns={MAX_ITEMS}>
        <RowItemContainer>
          <BoxIcon />
          <RichMarkdown text={freeShippingHtml} variant="dealsRow" />
        </RowItemContainer>
        <RowItemContainer>
          <DeliveryIcon />
          <RichMarkdown text={deliveryHtml} variant="dealsRow" />
        </RowItemContainer>
        <RowItemContainer>
          <StoreIcon />
          <RichMarkdown text={pickupHtml} variant="dealsRow" />
        </RowItemContainer>
        <RowItemContainer>
          <CouponIcon />
          <RichMarkdown text={dealHtml} variant="dealsRow" />
        </RowItemContainer>
      </Grid>
    </Box>
  </FullWidthContainer>
)

export default RichTextRow
