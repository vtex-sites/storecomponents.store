
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
export type HomePageQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type HomePageQueryQuery = { vtexCmsPageContent: Maybe<{ blocks: Array<Maybe<{ name: string, props: Maybe<any> }>> }> };


// Query Related Code

export const HomePageQuery = {
  query: "query HomePageQuery {\n  vtexCmsPageContent(type: {eq: \"home\"}) {\n    blocks {\n      name\n      props\n    }\n  }\n}\n",
  sha256Hash: "13cefe685ba2df84786fcd758d2b72f16d474a7d3530f8bc437df342483f7965",
  operationName: "HomePageQuery",
}

