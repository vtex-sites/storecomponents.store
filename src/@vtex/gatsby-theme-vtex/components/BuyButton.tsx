/** @jsx jsx */
import { FC } from 'react'
import {
  useBuyButton,
  SKU,
} from '@vtex/gatsby-theme-vtex/src/sdk/buyButton/useBuyButton'
import { Button, jsx, SxStyleProp } from '@vtex/store-ui'
import { useIntl } from '@vtex/gatsby-plugin-i18n'

interface Props {
  sku: SKU | undefined | null
}

const styles: SxStyleProp = {
  px: '24px',
  width: '100%',
  fontWeight: 500,
  minHeight: '32px',
  textTransform: 'uppercase',
  backgroundColor: 'primary',

  '&:hover': {
    opacity: '0.95',
  },
}

const BuyButton: FC<Props> = ({ sku }) => {
  const { formatMessage } = useIntl()
  const props = useBuyButton(sku)

  return (
    <Button sx={styles} {...props}>
      {formatMessage({ id: 'buy-button.add-to-cart' })}
    </Button>
  )
}

export default BuyButton
