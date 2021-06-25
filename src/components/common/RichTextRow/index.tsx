/** @jsx jsx */
import { Grid, jsx } from '@vtex/store-ui'
import type { FC } from 'react'

import BoxIcon from '../../icons/Box'
import CouponIcon from '../../icons/Coupon'
import DeliveryIcon from '../../icons/Delivery'
import StoreIcon from '../../icons/Store'
import styles from './styles.json'

const MAX_ITEMS = [1, 4]

const RichTextRow: FC = () => (
  <div sx={styles}>
    <Grid gap={2} columns={MAX_ITEMS}>
      <div sx={styles.item}>
        <BoxIcon />
        <div sx={styles.itemText}>Exclusive deals</div>
      </div>
      <div sx={styles.item}>
        <DeliveryIcon />
        <div sx={styles.itemText}>One day delivery</div>
      </div>
      <div sx={styles.item}>
        <StoreIcon />
        <div sx={styles.itemText}>Free shipping!!</div>
      </div>
      <div sx={styles.item}>
        <CouponIcon />
        <div sx={styles.itemText}>Pick up in store</div>
      </div>
    </Grid>
  </div>
)

export default RichTextRow
