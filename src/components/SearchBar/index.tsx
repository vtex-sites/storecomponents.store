import type { FC } from 'react'
import React from 'react'
import { SearchBar as StoreUISearchBar } from '@vtex/store-ui'
import { useSearch } from '@vtex/gatsby-theme-store'
import SearchSuggestions from '@vtex/gatsby-theme-store/src/components/SearchSuggestions'

const SearchBar: FC = () => {
  const onSearch = useSearch()

  return (
    <StoreUISearchBar
      onSearch={onSearch}
      placeholder="Olá, o que você procura hoje?"
      aria-label="Olá, o que você procura hoje?"
    >
      <SearchSuggestions />
    </StoreUISearchBar>
  )
}

export default SearchBar
