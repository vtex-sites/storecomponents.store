import {
  useDiscount,
  useListPrice,
  useNumberFormat,
  usePrice,
} from '@vtex/gatsby-theme-store'
import {
  Flex,
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
  }
  variant: string
}

const Offer: FC<Props> = ({
  commercialOffer,
  commercialOffer: {
    maxInstallments: [maxInstallments],
  },
  variant,
}) => {
  const { format } = useNumberFormat()
  const price = usePrice(commercialOffer)
  const listPrice = useListPrice(commercialOffer)
  const discountPrice = useDiscount(commercialOffer)

  return (
    <OfferContainer variant={variant}>
      {commercialOffer.price === 0 ? (
        <OfferSoldOut variant={variant}>
          <FormattedMessage id="offer.soldout" />
        </OfferSoldOut>
      ) : (
        <>
          <OfferListPrice variant={variant}>{listPrice}</OfferListPrice>

          <Flex sx={{ alignItems: 'center', minHeight: '30px' }}>
            <OfferPrice variant={variant}>{price}</OfferPrice>
            <OfferDiscountBadge variant={variant}>
              {discountPrice !== 0 ? <>-{discountPrice}%</> : discountPrice}
            </OfferDiscountBadge>
          </Flex>

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
