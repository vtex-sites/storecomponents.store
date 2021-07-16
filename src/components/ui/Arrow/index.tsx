/** @jsx jsx */
import { Button, jsx } from '@vtex/store-ui'
import Left from 'src/components/icons/ArrowLeft'
import Right from 'src/components/icons/ArrowRight'
import type { IconProps } from '@vtex/store-ui'
import type { FC } from 'react'

import styles from './styles.json'

interface Props extends IconProps {
  direction: 'left' | 'right'
  variant?: 'default'
}

const Arrow: FC<Props> = ({ direction, variant = 'default', ...props }) => (
  <Button sx={styles[variant]} {...props}>
    {direction === 'left' ? <Left /> : <Right />}
  </Button>
)

export default Arrow
