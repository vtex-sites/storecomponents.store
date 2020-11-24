import React, { FC } from 'react'
import { useIntl } from '@vtex/gatsby-plugin-i18n'
import { useNumberFormat } from '@vtex/gatsby-theme-store/src/sdk/localization/useNumberFormat'
import { useListPrice } from '@vtex/gatsby-theme-store/src/sdk/offer/useListPrice'
import { useDiscount } from '@vtex/gatsby-theme-store/src/sdk/offer/useDiscount'
import { usePrice } from '@vtex/gatsby-theme-store/src/sdk/offer/usePrice'
import {
  Flex,
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
  const { formatMessage } = useIntl()
  const { format } = useNumberFormat()
  const price = usePrice(commercialOffer)
  const listPrice = useListPrice(commercialOffer)
  const discountPrice = useDiscount(commercialOffer)

  return (
    <OfferContainer variant={variant}>
      {commercialOffer.price === 0 ? (
        <OfferSoldOut variant={variant}>
          {formatMessage({ id: 'offer.soldout' })}
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
