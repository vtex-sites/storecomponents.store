
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
export type ServerProductPageQueryQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type ServerProductPageQueryQuery = { product: Maybe<{ titleTag: Maybe<string>, metaTagDescription: Maybe<string>, productName: Maybe<string>, description: Maybe<string>, brand: Maybe<string>, linkText: Maybe<string>, productReference: Maybe<string>, id: Maybe<string>, items: Maybe<Array<Maybe<{ itemId: Maybe<string>, ean: Maybe<string>, name: Maybe<string>, complementName: Maybe<string>, images: Maybe<Array<Maybe<{ imageUrl: Maybe<string>, imageText: Maybe<string> }>>>, sellers: Maybe<Array<Maybe<{ commercialOffer: Maybe<{ spotPrice: Maybe<number>, availableQuantity: Maybe<number>, priceValidUntil: Maybe<string>, price: Maybe<number>, listPrice: Maybe<number> }> }>>>, referenceId: Maybe<Array<Maybe<{ value: Maybe<string> }>>>, videos: Maybe<Array<Maybe<{ videoUrl: Maybe<string> }>>> }>>>, categoryTree: Maybe<Array<Maybe<{ href: Maybe<string>, name: Maybe<string> }>>>, productClusters: Maybe<Array<Maybe<{ id: Maybe<string>, name: Maybe<string> }>>>, properties: Maybe<Array<Maybe<{ name: Maybe<string>, originalName: Maybe<string>, values: Maybe<Array<Maybe<string>>> }>>> }> };


// Query Related Code

export const ServerProductPageQuery = {
  query: process.env.NODE_ENV === 'production' ? undefined : "query ServerProductPageQuery($id: String!) {\n  product: storeProduct(id: {eq: $id}) {\n    id: productId\n    titleTag\n    metaTagDescription\n    productName\n    description\n    brand\n    linkText\n    items {\n      itemId\n      ean\n      images {\n        imageUrl\n        imageText\n      }\n      sellers {\n        commercialOffer: commertialOffer {\n          spotPrice\n          availableQuantity: AvailableQuantity\n          priceValidUntil: PriceValidUntil\n          price: Price\n          listPrice: ListPrice\n        }\n      }\n      name\n      complementName\n      referenceId {\n        value: Value\n      }\n      videos {\n        videoUrl\n      }\n    }\n    categoryTree {\n      href\n      name\n    }\n    productReference\n    productClusters {\n      id\n      name\n    }\n    properties {\n      name\n      originalName\n      values\n    }\n  }\n}\n",
  sha256Hash: "817224b5cae1a2ca6e7bc2a87c1281ad957e75a1d22d997a5bd92efe680adec4",
  operationName: "ServerProductPageQuery",
}

