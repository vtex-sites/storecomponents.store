import React from 'react'
import type { FC } from 'react'
import { useIntl } from '@vtex/gatsby-plugin-i18n'
import { useNumberFormat } from '@vtex/gatsby-theme-store/src/sdk/localization/useNumberFormat'
import { useListPrice } from '@vtex/gatsby-theme-store/src/sdk/offer/useListPrice'
import { usePrice } from '@vtex/gatsby-theme-store/src/sdk/offer/usePrice'
import {
  Box,
  OfferPrice,
  OfferSoldOut,
  OfferListPrice,
  OfferContainer,
  OfferInstallments,
  OfferDiscountBadge,
} from '@vtex/store-ui'

interface Installment {
  value: number
  numberOfInstallments: number
}

interface Props {
  commercialOffer: {
    price: number
    listPrice: number
    teasers: Array<{ name?: string }>
    maxInstallments: Installment[]
    availableQuantity: number
  }
  variant?: string
}

const useDiscount = ({
  price,
  listPrice,
}: {
  price: number
  listPrice: number
}) => {
  if (typeof price === 'number' && typeof listPrice === 'number') {
    return listPrice - price
  }

  return 0
}

const Offer: FC<Props> = ({
  commercialOffer,
  commercialOffer: {
    maxInstallments: [maxInstallments],
  },
  variant = 'default',
}) => {
  const { formatMessage } = useIntl()
  const { format } = useNumberFormat()
  const price = usePrice(commercialOffer)
  const listPrice = useListPrice(commercialOffer)
  const discountPrice = useDiscount(commercialOffer)

  const isAvailable =
    commercialOffer.price > 0 && commercialOffer.availableQuantity > 0

  return (
    <OfferContainer variant={variant}>
      {!isAvailable ? (
        <OfferSoldOut variant={variant}>
          {formatMessage({ id: 'offer.soldout' })}
        </OfferSoldOut>
      ) : (
        <>
          <Box
            sx={{
              display: 'flex',
              marginTop: '16px',
              marginBottom: '4px',
              justifyContent: 'flex-start',
            }}
          >
            <OfferListPrice variant={variant}>{listPrice}</OfferListPrice>
            <OfferDiscountBadge variant={variant}>
              {discountPrice !== 0
                ? formatMessage(
                    { id: 'offer.discount' },
                    { price: format(discountPrice) }
                  )
                : discountPrice}
            </OfferDiscountBadge>
          </Box>

          <OfferPrice variant={variant}>{price}</OfferPrice>

          <OfferInstallments variant={variant}>
            {maxInstallments
              ? formatMessage(
                  { id: 'offer.installments' },
                  {
                    value: format(maxInstallments.value),
                    numberOfInstallments: maxInstallments.numberOfInstallments,
                  }
                )
              : null}
          </OfferInstallments>
        </>
      )}
    </OfferContainer>
  )
}

export default Offer
