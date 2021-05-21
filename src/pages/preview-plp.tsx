import React from 'react'
import { Breadcrumb, Container } from '@vtex/store-ui'
import Layout from '@vtex/gatsby-theme-store/src/components/Layout'
import type { BreadcrumbItem } from '@vtex/store-ui'

import { Banner } from '../@vtex/gatsby-theme-store/components/SearchPage/Banner'

/* import AboveTheFold from '../@vtex/gatsby-theme-store/components/SearchPage/AboveTheFold' */

// https://storecomponents.vtex.app/page-data/apparel---accessories/clothing/page-data.json
const props = {
  componentChunkName:
    'component---node-modules-vtex-gatsby-theme-store-src-templates-search-tsx',
  path: '/apparel---accessories/clothing',
  result: {
    data: {
      vtex: {
        productSearch: {
          products: [
            {
              id: '3',
              productName: 'Tank Top',
              linkText: 'tank-top',
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
                },
              ],
            },
            {
              id: '2000186',
              productName: 'Hoodie Blackdope',
              linkText: 'hoodie-blackdope',
              items: [
                {
                  itemId: '310124167',
                  images: [
                    {
                      imageUrl:
                        'https://storecomponents.vtexassets.com/arquivos/ids/155603/IMG_0502_480x480.jpg?v=637097782489500000',
                      imageText: 'Frente1',
                    },
                    {
                      imageUrl:
                        'https://storecomponents.vtexassets.com/arquivos/ids/155604/IMG_0503_480x480.jpg?v=637097782693600000',
                      imageText: 'Frente1',
                    },
                    {
                      imageUrl:
                        'https://storecomponents.vtexassets.com/arquivos/ids/155605/IMG_0504_480x480.jpg?v=637097783025600000',
                      imageText: 'Frente1',
                    },
                  ],
                },
              ],
            },
            {
              id: '2000185',
              productName: 'Jumper Best Friend',
              linkText: 'jumper-best-friend',
              items: [
                {
                  itemId: '310124166',
                  images: [
                    {
                      imageUrl:
                        'https://storecomponents.vtexassets.com/arquivos/ids/155601/IMG_3503_1024x1024.jpg?v=637097638584000000',
                      imageText: 'Frente1',
                    },
                    {
                      imageUrl:
                        'https://storecomponents.vtexassets.com/arquivos/ids/155602/IMG_3505_480x480.jpg?v=637097638975630000',
                      imageText: 'Frente1',
                    },
                  ],
                },
              ],
            },
            {
              id: '2000035',
              productName: 'Different Seller BRA',
              linkText: 'asduashduas-copy-2000035-',
              items: [
                {
                  itemId: '2000594',
                  images: [
                    {
                      imageUrl:
                        'https://storecomponents.vtexassets.com/arquivos/ids/155553/download.png?v=637027012534770000',
                      imageText: null,
                    },
                  ],
                },
              ],
            },
            {
              id: '2000031',
              productName: 'Ten Top Shirts Kit',
              linkText: 'ten-top-shirts',
              items: [
                {
                  itemId: '2000583',
                  images: [
                    {
                      imageUrl:
                        'https://storecomponents.vtexassets.com/arquivos/ids/155544/shirt.png?v=637019075463530000',
                      imageText: null,
                    },
                  ],
                },
              ],
            },
            {
              id: '2000024',
              productName: 'Top Star Color Shirt',
              linkText: 'star-color-top',
              items: [
                {
                  itemId: '310124168',
                  images: [
                    {
                      imageUrl:
                        'https://storecomponents.vtexassets.com/arquivos/ids/155606/Top-Star-Color-Shirt---pink.jpg?v=637098714058400000',
                      imageText: 'Frente1',
                    },
                  ],
                },
                {
                  itemId: '2000564',
                  images: [
                    {
                      imageUrl:
                        'https://storecomponents.vtexassets.com/arquivos/ids/155518/download--40-.png?v=636942495289870000',
                      imageText: 'red',
                    },
                  ],
                },
                {
                  itemId: '2000565',
                  images: [
                    {
                      imageUrl:
                        'https://storecomponents.vtexassets.com/arquivos/ids/155519/download--51-.png?v=636942496232070000',
                      imageText: 'magenta',
                    },
                  ],
                },
                {
                  itemId: '2000567',
                  images: [
                    {
                      imageUrl:
                        'https://storecomponents.vtexassets.com/arquivos/ids/155521/download--53-.png?v=636943145000300000',
                      imageText: 'lightblue',
                    },
                  ],
                },
                {
                  itemId: '2000568',
                  images: [
                    {
                      imageUrl:
                        'https://storecomponents.vtexassets.com/arquivos/ids/155522/download--42-.png?v=636943145798400000',
                      imageText: 'lilac',
                    },
                  ],
                },
                {
                  itemId: '2000570',
                  images: [
                    {
                      imageUrl:
                        'https://storecomponents.vtexassets.com/arquivos/ids/155524/download--43-.png?v=636943147443270000',
                      imageText: 'white',
                    },
                  ],
                },
                {
                  itemId: '2000571',
                  images: [
                    {
                      imageUrl:
                        'https://storecomponents.vtexassets.com/arquivos/ids/155525/download--48-.png?v=636943148698470000',
                      imageText: 'brown',
                    },
                  ],
                },
                {
                  itemId: '2000572',
                  images: [
                    {
                      imageUrl:
                        'https://storecomponents.vtexassets.com/arquivos/ids/155526/download--44-.png?v=636943150013700000',
                      imageText: 'grey',
                    },
                  ],
                },
                {
                  itemId: '2000573',
                  images: [
                    {
                      imageUrl:
                        'https://storecomponents.vtexassets.com/arquivos/ids/155527/download--41-.png?v=636943151158800000',
                      imageText: 'yellow',
                    },
                  ],
                },
                {
                  itemId: '2000574',
                  images: [
                    {
                      imageUrl:
                        'https://storecomponents.vtexassets.com/arquivos/ids/155528/download--46-.png?v=636943152112800000',
                      imageText: 'green',
                    },
                  ],
                },
                {
                  itemId: '2000577',
                  images: [
                    {
                      imageUrl:
                        'https://storecomponents.vtexassets.com/arquivos/ids/155531/download--49-.png?v=636943154698270000',
                      imageText: 'orange',
                    },
                  ],
                },
                {
                  itemId: '310124162',
                  images: [
                    {
                      imageUrl:
                        'https://storecomponents.vtexassets.com/arquivos/ids/155588/Top-Star-Color-Shirt---Green.jpg?v=637088168561670000',
                      imageText: 'Frente1',
                    },
                  ],
                },
              ],
            },
            {
              id: '2000009',
              productName: 'Blouse+',
              linkText: 'blouse',
              items: [
                {
                  itemId: '2000549',
                  images: [
                    {
                      imageUrl:
                        'https://storecomponents.vtexassets.com/arquivos/ids/155591/Capturar21.png?v=637088270177770000',
                      imageText: 'Frente1',
                    },
                    {
                      imageUrl:
                        'https://storecomponents.vtexassets.com/arquivos/ids/155592/capturar22.png?v=637088270345830000',
                      imageText: 'Frente1',
                    },
                    {
                      imageUrl:
                        'https://storecomponents.vtexassets.com/arquivos/ids/155593/Capturar23.png?v=637088270562730000',
                      imageText: 'Frente1',
                    },
                    {
                      imageUrl:
                        'https://storecomponents.vtexassets.com/arquivos/ids/155594/Capturar24.png?v=637088270776100000',
                      imageText: 'Frente1',
                    },
                  ],
                },
                {
                  itemId: '2000545',
                  images: [
                    {
                      imageUrl:
                        'https://storecomponents.vtexassets.com/arquivos/ids/155504/Blouse1.png?v=636869725623330000',
                      imageText: 'front',
                    },
                  ],
                },
              ],
            },
            {
              id: '2000004',
              productName: 'St Tropez Top Shorts',
              linkText: 'st-tropez-shorts',
              items: [
                {
                  itemId: '310124169',
                  images: [
                    {
                      imageUrl:
                        'https://storecomponents.vtexassets.com/arquivos/ids/155607/St-Tropez-Top-Shorts---verde.jpg?v=637098724114770000',
                      imageText: 'Frente1',
                    },
                  ],
                },
                {
                  itemId: '2000535',
                  images: [
                    {
                      imageUrl:
                        'https://storecomponents.vtexassets.com/arquivos/ids/155488/Frame.jpg?v=636793838658230000',
                      imageText: null,
                    },
                    {
                      imageUrl:
                        'https://storecomponents.vtexassets.com/arquivos/ids/155626/vtex.jpg?v=637214466642970000',
                      imageText: null,
                    },
                  ],
                },
              ],
            },
            {
              id: '11',
              productName: 'Trendy Sweatshirt Top',
              linkText: 'trendy-sweatshirt',
              items: [
                {
                  itemId: '22',
                  images: [
                    {
                      imageUrl:
                        'https://storecomponents.vtexassets.com/arquivos/ids/155457/Frame-6.jpg?v=636793742864100000',
                      imageText: null,
                    },
                  ],
                },
              ],
            },
            {
              id: '1',
              productName: 'Work Shirt Top',
              linkText: 'working-shirt',
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
                },
              ],
            },
          ],
          recordsFiltered: 10,
        },
        searchMetadata: { title: 'Clothing', description: 'Clothing' },
        facets: {
          breadcrumb: [
            {
              href: '/apparel---accessories?map=category-1',
              name: 'Apparel & Accessories',
            },
            {
              href: '/apparel---accessories/clothing?map=category-1,category-2',
              name: 'Clothing',
            },
          ],
          facets: [
            {
              name: 'Color',
              type: 'TEXT',
              values: [
                {
                  key: 'color',
                  name: 'White',
                  value: 'white',
                  selected: false,
                  quantity: 1,
                  range: null,
                  values: null,
                },
                {
                  key: 'color',
                  name: 'Grey',
                  value: 'grey',
                  selected: false,
                  quantity: 1,
                  range: null,
                  values: null,
                },
                {
                  key: 'color',
                  name: 'Pink',
                  value: 'pink',
                  selected: false,
                  quantity: 2,
                  range: null,
                  values: null,
                },
                {
                  key: 'color',
                  name: 'Green',
                  value: 'green',
                  selected: false,
                  quantity: 5,
                  range: null,
                  values: null,
                },
                {
                  key: 'color',
                  name: 'Light green',
                  value: 'light-green',
                  selected: false,
                  quantity: 1,
                  range: null,
                  values: null,
                },
                {
                  key: 'color',
                  name: 'Blue',
                  value: 'blue',
                  selected: false,
                  quantity: 2,
                  range: null,
                  values: null,
                },
                {
                  key: 'color',
                  name: 'Light blue',
                  value: 'light-blue',
                  selected: false,
                  quantity: 1,
                  range: null,
                  values: null,
                },
                {
                  key: 'color',
                  name: 'Brown',
                  value: 'brown',
                  selected: false,
                  quantity: 2,
                  range: null,
                  values: null,
                },
                {
                  key: 'color',
                  name: 'Fuchsia',
                  value: 'fuchsia',
                  selected: false,
                  quantity: 1,
                  range: null,
                  values: null,
                },
                {
                  key: 'color',
                  name: 'Red',
                  value: 'red',
                  selected: false,
                  quantity: 2,
                  range: null,
                  values: null,
                },
                {
                  key: 'color',
                  name: 'Black',
                  value: 'black',
                  selected: false,
                  quantity: 2,
                  range: null,
                  values: null,
                },
                {
                  key: 'color',
                  name: 'Rose',
                  value: 'rose',
                  selected: false,
                  quantity: 1,
                  range: null,
                  values: null,
                },
              ],
            },
            {
              name: 'Price',
              type: 'PRICERANGE',
              values: [
                {
                  key: 'price',
                  name: '',
                  value: null,
                  selected: false,
                  quantity: 4,
                  range: { from: 13.21, to: 30 },
                  values: null,
                },
                {
                  key: 'price',
                  name: '',
                  value: null,
                  selected: false,
                  quantity: 3,
                  range: { from: 200, to: 2000000 },
                  values: null,
                },
                {
                  key: 'price',
                  name: '',
                  value: null,
                  selected: false,
                  quantity: 3,
                  range: { from: 30, to: 200 },
                  values: null,
                },
              ],
            },
            {
              name: 'Brand',
              type: 'TEXT',
              values: [
                {
                  key: 'brand',
                  name: 'Kawasaki',
                  value: 'kawasaki',
                  selected: false,
                  quantity: 4,
                  range: null,
                  values: null,
                },
                {
                  key: 'brand',
                  name: 'Samsung',
                  value: 'samsung',
                  selected: false,
                  quantity: 2,
                  range: null,
                  values: null,
                },
                {
                  key: 'brand',
                  name: 'Motorola',
                  value: 'motorola',
                  selected: false,
                  quantity: 1,
                  range: null,
                  values: null,
                },
                {
                  key: 'brand',
                  name: 'Mizuno',
                  value: 'mizuno',
                  selected: false,
                  quantity: 1,
                  range: null,
                  values: null,
                },
                {
                  key: 'brand',
                  name: 'BWE',
                  value: 'bwe',
                  selected: false,
                  quantity: 1,
                  range: null,
                  values: null,
                },
                {
                  key: 'brand',
                  name: 'AOC',
                  value: 'aoc',
                  selected: false,
                  quantity: 1,
                  range: null,
                  values: null,
                },
              ],
            },
            {
              name: 'Category',
              type: 'TEXT',
              values: [
                {
                  key: 'category-2',
                  name: 'Clothing',
                  value: 'clothing',
                  selected: true,
                  quantity: 10,
                  range: null,
                  values: null,
                },
                {
                  key: 'category-2',
                  name: 'Accessories',
                  value: 'accessories',
                  selected: false,
                  quantity: 4,
                  range: null,
                  values: null,
                },
                {
                  key: 'category-2',
                  name: 'Eyeglasses',
                  value: 'eyeglasses',
                  selected: false,
                  quantity: 2,
                  range: null,
                  values: null,
                },
                {
                  key: 'category-2',
                  name: 'Watches',
                  value: 'watches',
                  selected: false,
                  quantity: 1,
                  range: null,
                  values: null,
                },
                {
                  key: 'category-2',
                  name: 'Shoes',
                  value: 'shoes',
                  selected: false,
                  quantity: 1,
                  range: null,
                  values: null,
                },
                {
                  key: 'category-2',
                  name: 'Hats',
                  value: 'hats',
                  selected: false,
                  quantity: 1,
                  range: null,
                  values: null,
                },
              ],
            },
            {
              name: 'Department',
              type: 'TEXT',
              values: [
                {
                  key: 'category-1',
                  name: 'Apparel & Accessories',
                  value: 'apparel---accessories',
                  selected: true,
                  quantity: 10,
                  range: null,
                  values: null,
                },
              ],
            },
          ],
        },
      },
    },
    pageContext: {
      orderBy: '',
      query: 'apparel---accessories/clothing',
      map: 'c,c',
      selectedFacets: [
        { key: 'c', value: 'apparel---accessories' },
        { key: 'c', value: 'clothing' },
      ],
      id: '01a54606-2c6d-5e46-884d-68242321ff64',
      canonicalPath: '/apparel---accessories/clothing',
      staticPath: true,
      originalPath: '/apparel---accessories/clothing',
      vtexCmsPageContent: {
        blocks: [
          {
            name: 'SearchBanner',
            props: {
              title: 'Clothing',
              alt: 'Clothing',
              sources: [
                {
                  media: '(min-width: 40em)',
                  srcSet:
                    'https://storecomponents.vtexassets.com/assets/vtex.file-manager-graphql/images/dd90a892-5c3c-421e-aaa8-e67dae1db81d___0a02cfebea6970ba910cebe5f35c199d.jpg?width=1280&aspect=true 1280w,https://storecomponents.vtexassets.com/assets/vtex.file-manager-graphql/images/dd90a892-5c3c-421e-aaa8-e67dae1db81d___0a02cfebea6970ba910cebe5f35c199d.jpg?width=1440&aspect=true 1440w,https://storecomponents.vtexassets.com/assets/vtex.file-manager-graphql/images/dd90a892-5c3c-421e-aaa8-e67dae1db81d___0a02cfebea6970ba910cebe5f35c199d.jpg?width=1920&aspect=true 1920w',
                },
                {
                  media: '(max-width: 40em)',
                  srcSet:
                    'https://storecomponents.vtexassets.com/assets/vtex.file-manager-graphql/images/762056f3-588e-4fc8-bd6d-a4df28db89e8___e3ebb67c189a6fcf3ce89140474259d4.jpeg?width=360&aspect=true 360w,https://storecomponents.vtexassets.com/assets/vtex.file-manager-graphql/images/762056f3-588e-4fc8-bd6d-a4df28db89e8___e3ebb67c189a6fcf3ce89140474259d4.jpeg?width=480&aspect=true 480w',
                },
              ],
            },
          },
        ],
        extraBlocks: [
          {
            name: 'Parameters',
            blocks: [
              {
                name: 'SearchIdSelector',
                props: {
                  orderBy: 'OrderByScoreDESC',
                  id: '/apparel---accessories/clothing',
                },
              },
            ],
          },
        ],
      },
    },
  },
  staticQueryHashes: ['1509283416', '3105657990', '958032024'],
}

/* const COLUMNS = [2, 3, 5] */

const Page = () => {
  // https://github.com/vtex/faststore/blob/ef28af02bef9c124ecf3d00dd01e281fcd1291dd/packages/gatsby-theme-store/src/templates/search.tsx
  // TODO: Reuse <AboveTheFold> component
  // const pageProps = {
  //  ...props.result,
  //  staticPath: props.result.pageContext.staticPath,
  //  data: props.result.data,
  // }

  // return <AboveTheFold {...pageProps} />

  const breadcrumb = (props.result.data.vtex.facets?.breadcrumb ??
    []) as BreadcrumbItem[]

  const [result, setResult] = React.useState({})

  React.useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/todos/1'
      )

      const json = await response.json()

      /* console.log(json) */
      setResult(json)
    }

    fetchData()
  }, [])

  return (
    <Layout>
      <Container>
        <Breadcrumb breadcrumb={breadcrumb} type="SEARCH" />
        <Banner {...props.result.pageContext.vtexCmsPageContent} />
      </Container>
    </Layout>
  )
}

export default Page
