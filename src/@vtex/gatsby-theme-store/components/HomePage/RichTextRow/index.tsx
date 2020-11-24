import React, { FC } from 'react'
import { Box, Flex, Grid, RichMarkdown } from '@vtex/store-ui'

import freeShippingHtml from './free-shipping.md'
import deliveryHtml from './delivery.md'
import pickupHtml from './pickup.md'
import dealHtml from './deal.md'
import BoxImg from './Box'
import DeliveryImg from './Delivery'
import StoreImg from './Store'
import CouponImg from './Coupon'

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
          <BoxImg />
          <RichMarkdown text={freeShippingHtml} variant="dealsRow" />
        </RowItemContainer>
        <RowItemContainer>
          <DeliveryImg />
          <RichMarkdown text={deliveryHtml} variant="dealsRow" />
        </RowItemContainer>
        <RowItemContainer>
          <StoreImg />
          <RichMarkdown text={pickupHtml} variant="dealsRow" />
        </RowItemContainer>
        <RowItemContainer>
          <CouponImg />
          <RichMarkdown text={dealHtml} variant="dealsRow" />
        </RowItemContainer>
      </Grid>
    </Box>
  </FullWidthContainer>
)

export default RichTextRow
