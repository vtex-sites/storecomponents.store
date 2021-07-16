/** @jsx jsx */
import { Button, jsx } from '@vtex/store-ui'
import Left from 'src/components/icons/ArrowLeft'
import Right from 'src/components/icons/ArrowRight'
import type { IconProps } from '@vtex/store-ui'
import type { FC } from 'react'

interface Props extends IconProps {
  direction: 'left' | 'right'
}

const Arrow: FC<Props> = ({ direction, ...props }) => (
  <Button {...props}>{direction === 'left' ? <Left /> : <Right />}</Button>
)

export default Arrow
