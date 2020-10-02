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
import offerTheme from './offer'
import searchBarTheme from './searchBar'
import productDetailsTheme from './productDetails'
import productSummaryTheme from './productSummary'
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
  custom,
  offerTheme,
  productSummaryTheme,
  productDetailsTheme
)
