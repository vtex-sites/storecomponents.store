/** @jsx jsx */
import { Bullets as UIBullets, jsx } from '@vtex/store-ui'
import type { BulletsProps } from '@vtex/store-ui'
import type { FC } from 'react'

import styles from './styles.json'

interface Props extends BulletsProps {
  variant?: 'default'
}

const Bullets: FC<Props> = ({ variant = 'default', ...props }) => (
  <div sx={styles[variant]}>
    <UIBullets {...props} />
  </div>
)

export default Bullets
