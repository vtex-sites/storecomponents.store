import { Button as StoreUIButton } from '@vtex/store-ui'
import React from 'react'
import { FormattedMessage } from 'react-intl'
import type { FC, ComponentPropsWithoutRef } from 'react'
import type { SxStyleProp } from '@vtex/store-ui'

const styles: SxStyleProp = {
  px: '24px',
  width: '100%',
  fontWeight: 500,
  minHeight: '40px',
  textTransform: 'uppercase',
  backgroundColor: 'primary',

  '&:hover': {
    opacity: '0.95',
  },

  '&:disabled': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#eeeeee',
    color: 'text',
  },
}

type Props = ComponentPropsWithoutRef<typeof StoreUIButton>

const Button: FC<Props> = (props) => (
  <StoreUIButton {...props} sx={styles}>
    <FormattedMessage id="buy-button.add-to-cart" />
  </StoreUIButton>
)

export default Button
