
/**
 * Warning: This is an autogenerated file.
 *
 * Changes in this file won't take effect and will be overwritten
 */

// Base Types
type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
type Maybe<T> = T | null | undefined
type Scalars = {
  Boolean: boolean
  String: string
  Float: number
  Int: number
  ID: string
}

// Operation related types
export type HomePageQueryQueryVariables = Exact<{
  from: Scalars['Int'];
  to: Scalars['Int'];
  collection: Scalars['String'];
  orderBy: Scalars['String'];
  hideUnavailableItems: Scalars['Boolean'];
}>;


export type HomePageQueryQuery = { seo: Maybe<{ extraBlocks: Array<Maybe<{ blocks: Array<{ name: string, props: Maybe<any> }> }>> }>, content: Maybe<{ blocks: Array<Maybe<{ name: string, props: Maybe<any> }>> }>, vtex: { products: Maybe<Array<Maybe<{ productName: Maybe<string>, linkText: Maybe<string>, brand: Maybe<string>, productReference: Maybe<string>, id: Maybe<string>, categoryTree: Maybe<Array<Maybe<{ name: Maybe<string> }>>>, productClusters: Maybe<Array<Maybe<{ id: Maybe<string>, name: Maybe<string> }>>>, properties: Maybe<Array<Maybe<{ name: Maybe<string>, originalName: Maybe<string>, values: Maybe<Array<Maybe<string>>> }>>>, items: Maybe<Array<Maybe<{ itemId: Maybe<string>, name: Maybe<string>, referenceId: Maybe<Array<Maybe<{ value: Maybe<string> }>>>, images: Maybe<Array<Maybe<{ imageUrl: Maybe<string>, imageText: Maybe<string> }>>>, sellers: Maybe<Array<Maybe<{ sellerId: Maybe<string>, commercialOffer: Maybe<{ spotPrice: Maybe<number>, availableQuantity: Maybe<number>, price: Maybe<number>, listPrice: Maybe<number>, maxInstallments: Maybe<Array<Maybe<{ value: Maybe<number>, numberOfInstallments: Maybe<number> }>>>, installments: Maybe<Array<Maybe<{ value: Maybe<number>, numberOfInstallments: Maybe<number>, interestRate: Maybe<number> }>>>, teasers: Maybe<Array<{ name: Maybe<string> }>> }> }>>> }>>> }>>> } };


// Query Related Code

export const HomePageQuery = {
  query: process.env.NODE_ENV === 'production' ? undefined : "query HomePageQuery($from: Int!, $to: Int!, $collection: String!, $orderBy: String!, $hideUnavailableItems: Boolean!) {\n  seo: vtexCmsPageContent(type: {eq: \"seo\"}) {\n    extraBlocks {\n      blocks {\n        name\n        props\n      }\n    }\n  }\n  content: vtexCmsPageContent(type: {eq: \"home\"}) {\n    blocks {\n      name\n      props\n    }\n  }\n  vtex {\n    products(\n      from: $from\n      to: $to\n      collection: $collection\n      orderBy: $orderBy\n      hideUnavailableItems: $hideUnavailableItems\n    ) {\n      id: productId\n      productName\n      linkText\n      brand\n      productReference\n      categoryTree {\n        name\n      }\n      productClusters {\n        id\n        name\n      }\n      properties {\n        name\n        originalName\n        values\n      }\n      items {\n        itemId\n        name\n        referenceId {\n          value: Value\n        }\n        images {\n          imageUrl\n          imageText\n        }\n        sellers {\n          sellerId\n          commercialOffer: commertialOffer {\n            maxInstallments: Installments(criteria: MAX_WITHOUT_INTEREST) {\n              value: Value\n              numberOfInstallments: NumberOfInstallments\n            }\n            installments: Installments(criteria: ALL) {\n              value: Value\n              numberOfInstallments: NumberOfInstallments\n              interestRate: InterestRate\n            }\n            availableQuantity: AvailableQuantity\n            price: Price\n            listPrice: ListPrice\n            spotPrice\n            teasers {\n              name\n            }\n          }\n        }\n      }\n    }\n  }\n}\n",
  sha256Hash: "8b832d681046bf6e57c068db65f53221210e83e9f309eb110d22441f387f4228",
  operationName: "HomePageQuery",
}

