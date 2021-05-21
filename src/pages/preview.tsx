import Layout from '@vtex/gatsby-theme-store/src/components/Layout'
import { useLocation } from '@reach/router'
import React, { useRef, useEffect } from 'react'
import useInterval from '@use-it/interval'
import { Skeleton } from '@vtex/store-ui'

import AboveTheFold from '../@vtex/gatsby-theme-store/components/HomePage/AboveTheFold'
import BelowTheFold from '../@vtex/gatsby-theme-store/components/HomePage/BelowTheFold'

const CMS_BASE_URL =
  'https://nardi88--storecomponents.myvtex.com/_v/admin-cms-graphql-rc/v0/contentVariant?variantId='

const MOCK = {
  data: {
    vtex: {
      products: [
        {
          id: '1',
          productName: 'Work Shirt Top',
          linkText: 'working-shirt',
          productClusters: [
            {
              id: '1182',
              name: 'Top Seller',
            },
            {
              id: '1969',
              name: 'teste Ultimo SKU',
            },
          ],
          properties: [
            {
              name: 'On Sale',
              originalName: 'On Sale',
              values: ['True'],
            },
            {
              name: 'Hide price',
              originalName: 'Hide price',
              values: ['True'],
            },
            {
              name: 'Sleeve type',
              originalName: 'Sleeve type',
              values: ['Long Sleeve'],
            },
            {
              name: 'Color',
              originalName: 'Color',
              values: ['Grey', 'Green', 'Pink', 'Red', 'Fuchsia', 'Blue'],
            },
            {
              name: 'sellerId',
              originalName: 'sellerId',
              values: ['1'],
            },
          ],
          items: [
            {
              itemId: '2000546',
              images: [
                {
                  imageUrl:
                    'https://storecomponents.vtexassets.com/arquivos/ids/155580/work-shirt_verde.jpg?v=637082282343630000',
                  imageText: null,
                },
              ],
              sellers: [
                {
                  sellerId: '1',
                  commercialOffer: {
                    maxInstallments: [
                      {
                        value: 27.99,
                        numberOfInstallments: 1,
                      },
                    ],
                    installments: [
                      {
                        value: 27.99,
                        numberOfInstallments: 1,
                        interestRate: 0,
                      },
                    ],
                    availableQuantity: 10000,
                    price: 27.99,
                    listPrice: 27.99,
                    spotPrice: 27.99,
                    teasers: [
                      {
                        name: '8% Boleto',
                      },
                    ],
                  },
                },
              ],
            },
            {
              itemId: '2000533',
              images: [
                {
                  imageUrl:
                    'https://storecomponents.vtexassets.com/arquivos/ids/155477/Frame-5.jpg?v=636793808919200000',
                  imageText: null,
                },
              ],
              sellers: [
                {
                  sellerId: '1',
                  commercialOffer: {
                    maxInstallments: [
                      {
                        value: 23411.7,
                        numberOfInstallments: 1,
                      },
                    ],
                    installments: [
                      {
                        value: 23411.7,
                        numberOfInstallments: 1,
                        interestRate: 0,
                      },
                    ],
                    availableQuantity: 10000,
                    price: 23411.7,
                    listPrice: 28014,
                    spotPrice: 23411.7,
                    teasers: [
                      {
                        name: '8% Boleto',
                      },
                    ],
                  },
                },
              ],
            },
            {
              itemId: '2000547',
              images: [
                {
                  imageUrl:
                    'https://storecomponents.vtexassets.com/arquivos/ids/155581/work-shirt_rosabb.jpg?v=637082285184830000',
                  imageText: null,
                },
              ],
              sellers: [
                {
                  sellerId: '1',
                  commercialOffer: {
                    maxInstallments: [
                      {
                        value: 70.24,
                        numberOfInstallments: 1,
                      },
                    ],
                    installments: [
                      {
                        value: 70.24,
                        numberOfInstallments: 1,
                        interestRate: 0,
                      },
                    ],
                    availableQuantity: 10000,
                    price: 70.24,
                    listPrice: 70.24,
                    spotPrice: 70.24,
                    teasers: [
                      {
                        name: '8% Boleto',
                      },
                    ],
                  },
                },
              ],
            },
            {
              itemId: '2000548',
              images: [
                {
                  imageUrl:
                    'https://storecomponents.vtexassets.com/arquivos/ids/155586/work-shirt_rosasalmao.jpg?v=637085533153900000',
                  imageText: 'Frente1',
                },
              ],
              sellers: [
                {
                  sellerId: '1',
                  commercialOffer: {
                    maxInstallments: [
                      {
                        value: 944.02,
                        numberOfInstallments: 1,
                      },
                    ],
                    installments: [
                      {
                        value: 944.02,
                        numberOfInstallments: 1,
                        interestRate: 0,
                      },
                    ],
                    availableQuantity: 10000,
                    price: 944.02,
                    listPrice: 944.02,
                    spotPrice: 944.02,
                    teasers: [
                      {
                        name: '8% Boleto',
                      },
                    ],
                  },
                },
              ],
            },
            {
              itemId: '2000550',
              images: [
                {
                  imageUrl:
                    'https://storecomponents.vtexassets.com/arquivos/ids/155584/work-shirt_roxo.jpg?v=637082297972300000',
                  imageText: null,
                },
              ],
              sellers: [
                {
                  sellerId: '1',
                  commercialOffer: {
                    maxInstallments: [
                      {
                        value: 99.73,
                        numberOfInstallments: 1,
                      },
                    ],
                    installments: [
                      {
                        value: 99.73,
                        numberOfInstallments: 1,
                        interestRate: 0,
                      },
                    ],
                    availableQuantity: 10000,
                    price: 99.73,
                    listPrice: 99.73,
                    spotPrice: 99.73,
                    teasers: [
                      {
                        name: '8% Boleto',
                      },
                    ],
                  },
                },
              ],
            },
            {
              itemId: '310124157',
              images: [
                {
                  imageUrl:
                    'https://storecomponents.vtexassets.com/arquivos/ids/155583/work-shirt_azul.jpg?v=637082297211530000',
                  imageText: null,
                },
              ],
              sellers: [
                {
                  sellerId: '1',
                  commercialOffer: {
                    maxInstallments: [
                      {
                        value: 53,
                        numberOfInstallments: 1,
                      },
                    ],
                    installments: [
                      {
                        value: 53,
                        numberOfInstallments: 1,
                        interestRate: 0,
                      },
                    ],
                    availableQuantity: 10000,
                    price: 53,
                    listPrice: 53,
                    spotPrice: 53,
                    teasers: [
                      {
                        name: '8% Boleto',
                      },
                    ],
                  },
                },
              ],
            },
          ],
        },
        {
          id: '3',
          productName: 'Tank Top',
          linkText: 'tank-top',
          productClusters: [
            {
              id: '1182',
              name: 'Top Seller',
            },
            {
              id: '1967',
              name: 'Collection without highlight',
            },
            {
              id: '1969',
              name: 'teste Ultimo SKU',
            },
          ],
          properties: [
            {
              name: 'Sleeve type',
              originalName: 'Sleeve type',
              values: ['Sleeveless'],
            },
            {
              name: 'Color',
              originalName: 'Color',
              values: ['Black'],
            },
            {
              name: 'sellerId',
              originalName: 'sellerId',
              values: ['1'],
            },
          ],
          items: [
            {
              itemId: '3',
              images: [
                {
                  imageUrl:
                    'https://storecomponents.vtexassets.com/arquivos/ids/155642/Frame-1.jpg?v=637411554902130000',
                  imageText: null,
                },
              ],
              sellers: [
                {
                  sellerId: '1',
                  commercialOffer: {
                    maxInstallments: [
                      {
                        value: 375.77,
                        numberOfInstallments: 1,
                      },
                    ],
                    installments: [
                      {
                        value: 375.77,
                        numberOfInstallments: 1,
                        interestRate: 0,
                      },
                    ],
                    availableQuantity: 10000,
                    price: 375.77,
                    listPrice: 600.3,
                    spotPrice: 375.77,
                    teasers: [
                      {
                        name: '8% Boleto',
                      },
                    ],
                  },
                },
              ],
            },
            {
              itemId: '4',
              images: [
                {
                  imageUrl:
                    'https://storecomponents.vtexassets.com/arquivos/ids/155643/Frame-2.jpg?v=637411555784670000',
                  imageText: null,
                },
              ],
              sellers: [
                {
                  sellerId: '1',
                  commercialOffer: {
                    maxInstallments: [
                      {
                        value: 600.3,
                        numberOfInstallments: 1,
                      },
                    ],
                    installments: [
                      {
                        value: 600.3,
                        numberOfInstallments: 1,
                        interestRate: 0,
                      },
                    ],
                    availableQuantity: 10000,
                    price: 600.3,
                    listPrice: 1000.5,
                    spotPrice: 600.3,
                    teasers: [
                      {
                        name: '8% Boleto',
                      },
                    ],
                  },
                },
              ],
            },
          ],
        },
        {
          id: '8',
          productName: "Jobs' Top Notebook",
          linkText: 'jobs-notebook',
          productClusters: [
            {
              id: '1182',
              name: 'Top Seller',
            },
            {
              id: '1969',
              name: 'teste Ultimo SKU',
            },
          ],
          properties: [
            {
              name: 'battery',
              originalName: 'battery',
              values: ['1002'],
            },
            {
              name: 'Design',
              originalName: 'Design',
              values: ['Beautiful design.'],
            },
            {
              name: 'sellerId',
              originalName: 'sellerId',
              values: ['1'],
            },
          ],
          items: [
            {
              itemId: '19',
              images: [
                {
                  imageUrl:
                    'https://storecomponents.vtexassets.com/arquivos/ids/155478/Frame-7.jpg?v=636793810230270000',
                  imageText: null,
                },
                {
                  imageUrl:
                    'https://storecomponents.vtexassets.com/arquivos/ids/155479/Frame-8.jpg?v=636793810355200000',
                  imageText: null,
                },
                {
                  imageUrl:
                    'https://storecomponents.vtexassets.com/arquivos/ids/155480/Frame-6.jpg?v=636793810491070000',
                  imageText: null,
                },
              ],
              sellers: [
                {
                  sellerId: '1',
                  commercialOffer: {
                    maxInstallments: [
                      {
                        value: 2001,
                        numberOfInstallments: 1,
                      },
                    ],
                    installments: [
                      {
                        value: 2001,
                        numberOfInstallments: 1,
                        interestRate: 0,
                      },
                    ],
                    availableQuantity: 10000,
                    price: 2001,
                    listPrice: 2001,
                    spotPrice: 2001,
                    teasers: [
                      {
                        name: '8% Boleto',
                      },
                    ],
                  },
                },
              ],
            },
          ],
        },
        {
          id: '9',
          productName: 'Top Everyday Necessaire',
          linkText: 'everyday-necessaire',
          productClusters: [
            {
              id: '1182',
              name: 'Top Seller',
            },
          ],
          properties: [
            {
              name: 'Cor',
              originalName: 'Cor',
              values: ['Salmão'],
            },
            {
              name: 'sellerId',
              originalName: 'sellerId',
              values: ['1'],
            },
          ],
          items: [
            {
              itemId: '20',
              images: [
                {
                  imageUrl:
                    'https://storecomponents.vtexassets.com/arquivos/ids/155482/Frame-10.jpg?v=636793816835170000',
                  imageText: null,
                },
                {
                  imageUrl:
                    'https://storecomponents.vtexassets.com/arquivos/ids/155483/Frame-9.jpg?v=636793817010530000',
                  imageText: 'summaryimage',
                },
              ],
              sellers: [
                {
                  sellerId: '1',
                  commercialOffer: {
                    maxInstallments: [
                      {
                        value: 1600.8,
                        numberOfInstallments: 1,
                      },
                    ],
                    installments: [
                      {
                        value: 1600.8,
                        numberOfInstallments: 1,
                        interestRate: 0,
                      },
                    ],
                    availableQuantity: 10000,
                    price: 1600.8,
                    listPrice: 2001,
                    spotPrice: 1600.8,
                    teasers: [
                      {
                        name: '8% Boleto',
                      },
                    ],
                  },
                },
              ],
            },
          ],
        },
        {
          id: '12',
          productName: 'Top Traveler+Backpack',
          linkText: 'traveler-backpack',
          productClusters: [
            {
              id: '1182',
              name: 'Top Seller',
            },
          ],
          properties: [
            {
              name: 'Cor',
              originalName: 'Cor',
              values: ['Cinza'],
            },
            {
              name: 'sellerId',
              originalName: 'sellerId',
              values: ['1'],
            },
          ],
          items: [
            {
              itemId: '28',
              images: [
                {
                  imageUrl:
                    'https://storecomponents.vtexassets.com/arquivos/ids/155489/Frame-8.jpg?v=636793840315500000',
                  imageText: null,
                },
              ],
              sellers: [
                {
                  sellerId: '1',
                  commercialOffer: {
                    maxInstallments: [
                      {
                        value: 2201.1,
                        numberOfInstallments: 1,
                      },
                    ],
                    installments: [
                      {
                        value: 2201.1,
                        numberOfInstallments: 1,
                        interestRate: 0,
                      },
                    ],
                    availableQuantity: 10000,
                    price: 2201.1,
                    listPrice: 2901.45,
                    spotPrice: 2201.1,
                    teasers: [
                      {
                        name: '8% Boleto',
                      },
                    ],
                  },
                },
              ],
            },
          ],
        },
        {
          id: '14',
          productName: 'Top Fashion Eyeglasses',
          linkText: 'fashion-eyeglasses',
          productClusters: [
            {
              id: '1182',
              name: 'Top Seller',
            },
          ],
          properties: [
            {
              name: 'sellerId',
              originalName: 'sellerId',
              values: ['1'],
            },
          ],
          items: [
            {
              itemId: '31',
              images: [
                {
                  imageUrl:
                    'https://storecomponents.vtexassets.com/arquivos/ids/155468/Frame-5.jpg?v=636793755542000000',
                  imageText: null,
                },
                {
                  imageUrl:
                    'https://storecomponents.vtexassets.com/arquivos/ids/155467/Frame-4.jpg?v=636793755384500000',
                  imageText: 'summaryimage',
                },
              ],
              sellers: [
                {
                  sellerId: '1',
                  commercialOffer: {
                    maxInstallments: [
                      {
                        value: 1540.77,
                        numberOfInstallments: 1,
                      },
                    ],
                    installments: [
                      {
                        value: 1540.77,
                        numberOfInstallments: 1,
                        interestRate: 0,
                      },
                    ],
                    availableQuantity: 10000,
                    price: 1540.77,
                    listPrice: 1900.95,
                    spotPrice: 1540.77,
                    teasers: [
                      {
                        name: '8% Boleto',
                      },
                    ],
                  },
                },
              ],
            },
          ],
        },
      ],
    },
  },
}

const Preview = (props: any) => {
  const [data, setData] = React.useState({
    ...props,
    ...MOCK,
  })

  const { search } = useLocation()

  const [isLoaded, setIsLoaded] = React.useState(false)

  const updateContent = () => {
    const fetchData = async () => {
      const params = new URLSearchParams(search)
      const contentVariantId = params.get('contentVariantId')

      if (!contentVariantId) {
        return
      }

      const response = await fetch(`${CMS_BASE_URL}${contentVariantId}`)

      const { blocks } = await response.json()

      setData({
        ...data,
        data: {
          ...data.data,
          content: {
            blocks,
          },
        },
      })
      setIsLoaded(true)
    }

    fetchData()
  }

  useInterval(updateContent, 3000)

  return (
    <Layout>
      {isLoaded ? (
        <>
          <AboveTheFold {...data} />
          <BelowTheFold />
        </>
      ) : (
        <>
          <Skeleton height="615px" />
          <Skeleton height="85px" />
        </>
      )}
    </Layout>
  )
}

export default Preview
