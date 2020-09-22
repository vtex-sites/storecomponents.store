import {
  createTheme,
  headerTheme,
  infoCardTheme,
  minicartTheme,
  searchControlsTheme,
} from '@vtex/store-ui'
import searchBarTheme from '@vtex/gatsby-theme-vtex/components/SearchBar/theme'

import { base } from './base'
import { custom } from './custom'
import { breadcrumb } from './breadcrumb'
import { searchTheme } from './searchFilter'
import searchSuggestionsTheme from './searchSuggestions'

export default createTheme(
  base,
  breadcrumb,
  infoCardTheme,
  headerTheme,
  minicartTheme,
  searchControlsTheme,
  searchSuggestionsTheme,
  searchBarTheme,
  searchTheme,
  custom
)
