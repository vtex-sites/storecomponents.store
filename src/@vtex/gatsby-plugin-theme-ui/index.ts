import {
  createTheme,
  headerTheme,
  infoCardTheme,
  minicartTheme,
  searchControlsTheme,
} from '@vtex/store-ui'

import authTheme from './auth'
import { base } from './base'
import { breadcrumb } from './breadcrumb'
import { custom } from './custom'
import loginTheme from './login'
import offerTheme from './offer'
import productDetailsTheme from './productDetails'
import productSummaryTheme from './productSummary'
import searchBarTheme from './searchBar'
import { searchTheme } from './searchFilter'
import searchSuggestionsTheme from './searchSuggestions'
import sliderTheme from './slider'

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
  sliderTheme,
  offerTheme,
  productSummaryTheme,
  productDetailsTheme,
  loginTheme,
  authTheme
)
