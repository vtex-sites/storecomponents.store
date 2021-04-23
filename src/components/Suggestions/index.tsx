import {
  useAutocompleteSuggestions,
  useSearchHistory,
  useSuggestions,
  useTopSearches,
} from '@vtex/gatsby-theme-store'
import { SearchSuggestions, useSearchBarContext } from '@vtex/store-ui'
import React, { useMemo } from 'react'
import type { FC } from 'react'

import ProductSummary from '../../@vtex/gatsby-theme-store/components/ProductSummary'

const useHistory = () => {
  const history = useSearchHistory()

  return useMemo(() => history?.get().map((term) => ({ term, key: term })), [
    history,
  ])
}

const useAutocomplete = (searchTerm: string) => {
  const suggestions = useAutocompleteSuggestions({ term: searchTerm })

  return useMemo(() => suggestions.map(({ term }) => ({ term, key: term })), [
    suggestions,
  ])
}

const useTopSearchesSuggestions = () => {
  const topSearches = useTopSearches()

  return useMemo(() => topSearches?.map(({ term }) => ({ term, key: term })), [
    topSearches,
  ])
}

const useProductSuggestions = (term: string) => {
  const suggestions = useSuggestions({ maxItems: 3, term })

  return {
    total: suggestions.total,
    products: suggestions.products?.map((product) => ({
      ...product,
      key: product!.id,
    })),
  }
}

const Suggestions: FC = () => {
  const { asyncTerm: term } = useSearchBarContext()

  const history = useHistory()
  const topSearches = useTopSearchesSuggestions()
  const { products, total } = useProductSuggestions(term)

  // TODO: Remove this JSON.stringify and move this to the backed
  const autocomplete = useAutocomplete(JSON.stringify(term))

  return (
    <SearchSuggestions
      topSearches={topSearches}
      autocomplete={autocomplete}
      history={history}
      total={total}
      products={products as any}
      SummaryComponent={ProductSummary as any}
    />
  )
}

export default Suggestions
