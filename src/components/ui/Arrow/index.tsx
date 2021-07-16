/** @jsx jsx */
import { Button, jsx } from '@vtex/store-ui'
import type { IconProps } from '@vtex/store-ui'
import type { FC } from 'react'

interface Props extends IconProps {
  direction: 'left' | 'right'
}

const Right: FC = () => (
  <svg
    fill="none"
    width="25"
    height="25"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <use href="#nav-thin-caret--right" xlinkHref="#nav-thin-caret--right">
      <g id="nav-thin-caret--right">
        <path
          d="M5 15L12 8L5 1"
          stroke="currentColor"
          strokeWidth="2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </use>
  </svg>
)

const Left: FC = () => (
  <svg
    fill="none"
    width="25"
    height="25"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <use href="#nav-thin-caret--left" xlinkHref="#nav-thin-caret--left">
      <g id="nav-thin-caret--left">
        <path
          d="M11 1L4 8L11 15"
          stroke="currentColor"
          strokeWidth="2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </use>
  </svg>
)

const Arrow: FC<Props> = ({ direction, ...props }) => (
  <Button {...props}>{direction === 'left' ? <Left /> : <Right />}</Button>
)

export default Arrow
