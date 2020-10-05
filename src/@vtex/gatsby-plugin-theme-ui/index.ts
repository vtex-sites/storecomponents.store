import {
  createTheme,
  headerTheme,
  infoCardTheme,
  minicartTheme,
  searchControlsTheme,
} from '@vtex/store-ui'

import { base } from './base'
import { custom } from './custom'
import { breadcrumb } from './breadcrumb'
import { searchTheme } from './searchFilter'
import searchSuggestionsTheme from './searchSuggestions'
import searchBarTheme from './searchBar'
import productSummaryTheme from './productSummary'
import offerTheme from './offer'

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
  custom,
  offerTheme,
  productSummaryTheme
)
