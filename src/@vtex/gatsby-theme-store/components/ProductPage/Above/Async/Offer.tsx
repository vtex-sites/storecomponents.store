import {
  useListPrice,
  useNumberFormat,
  usePrice,
} from '@vtex/gatsby-theme-store'
import {
  Box,
  OfferContainer,
  OfferDiscountBadge,
  OfferInstallments,
  OfferListPrice,
  OfferPrice,
  OfferSoldOut,
} from '@vtex/store-ui'
import React from 'react'
import { FormattedMessage } from 'react-intl'
import type { FC } from 'react'

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
          <FormattedMessage id="offer.soldout" />
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
              {discountPrice !== 0 ? (
                <FormattedMessage
                  id="offer.discount"
                  values={{ price: format(discountPrice) }}
                />
              ) : (
                discountPrice
              )}
            </OfferDiscountBadge>
          </Box>

          <OfferPrice variant={variant}>{price}</OfferPrice>

          <OfferInstallments variant={variant}>
            {maxInstallments ? (
              <FormattedMessage
                id="offer.installments"
                values={{
                  value: format(maxInstallments.value),
                  numberOfInstallments: maxInstallments.numberOfInstallments,
                }}
              />
            ) : null}
          </OfferInstallments>
        </>
      )}
    </OfferContainer>
  )
}

export default Offer
