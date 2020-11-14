/** @jsx jsx */
import { FC } from 'react'
import {
  useBuyButton,
  SKU,
} from '@vtex/gatsby-theme-vtex/src/sdk/buyButton/useBuyButton'
import { Button, jsx, Spinner, SxStyleProp } from '@vtex/store-ui'
import { useIntl } from '@vtex/gatsby-plugin-i18n'

interface Props {
  sku: SKU | undefined | null
}

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

const BuyButton: FC<Props> = ({ sku }) => {
  const { formatMessage } = useIntl()
  const { loading, ...props } = useBuyButton({ sku })

  return (
    <Button sx={styles} {...props}>
      {loading ? (
        <Spinner size="20px" />
      ) : (
        formatMessage({ id: 'buy-button.add-to-cart' })
      )}
    </Button>
  )
}

export default BuyButton
