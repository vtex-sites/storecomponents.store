import { useSearch } from '@vtex/gatsby-theme-store'
import {
  Center,
  SearchBar as StoreUISearchBar,
  SearchSuggestionsContainer,
  Spinner,
  SuspenseSSR,
} from '@vtex/store-ui'
import React, { lazy } from 'react'
import type { FC } from 'react'

const SearchSuggestions = lazy(() => import('../Suggestions'))

const SearchBar: FC = () => {
  const onSearch = useSearch()

  return (
    <StoreUISearchBar
      onSearch={onSearch}
      placeholder="Olá, o que você procura hoje?"
      aria-label="Olá, o que você procura hoje?"
    >
      <SuspenseSSR
        fallback={
          <SearchSuggestionsContainer>
            <Center>
              <Spinner />
            </Center>
          </SearchSuggestionsContainer>
        }
      >
        <SearchSuggestions />
      </SuspenseSSR>
    </StoreUISearchBar>
  )
}

export default SearchBar
