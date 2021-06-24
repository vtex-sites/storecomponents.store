import { gql } from '@vtex/gatsby-plugin-graphql'
import { useQuery } from '@vtex/gatsby-theme-store'

import { AsyncProductQuery } from './__generated__/AsyncProductQuery.graphql'
import type {
  AsyncProductQueryQuery,
  AsyncProductQueryQueryVariables,
} from './__generated__/AsyncProductQuery.graphql'

export const useAsyncProduct = (variables: AsyncProductQueryQueryVariables) => {
  const { data } = useQuery<
    AsyncProductQueryQuery,
    AsyncProductQueryQueryVariables
  >({
    ...AsyncProductQuery,
    variables,
    suspense: true,
  })

  const product = data?.vtex.product

  return { product }
}

export const query = gql`
  query AsyncProductQuery($slug: String!, $regionId: String) {
    vtex {
      product(slug: $slug, regionId: $regionId) {
        id: productId
        productName
        productReference
        description
        linkText
        brand
        categoryTree {
          name
        }
        specificationGroups {
          name
          specifications {
            name
            values
          }
        }
        items {
          variations {
            name
            values
          }
          itemId
          name
          referenceId {
            value: Value
          }
          images {
            imageUrl
            imageText
          }
          sellers {
            sellerId
            commercialOffer: commertialOffer {
              installments: Installments {
                value: Value
                numberOfInstallments: NumberOfInstallments
                interestRate: InterestRate
              }
              availableQuantity: AvailableQuantity
              price: Price
              listPrice: ListPrice
              gifts {
                skuName
                images {
                  imageUrl
                }
              }
              spotPrice
              teasers {
                name
              }
            }
          }
        }
      }
    }
  }
`
