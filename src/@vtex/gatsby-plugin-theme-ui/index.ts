import {
  createTheme,
  headerTheme,
  infoCardTheme,
  minicartTheme,
  searchControlsTheme,
  loginTheme,
} from '@vtex/store-ui'

import authTheme from './auth'
import { base } from './base'
import { breadcrumb } from './breadcrumb'
import { custom } from './custom'
import { minicart } from './minicart'
import offerTheme from './offer'
import productDetailsTheme from './productDetails'
import { productQuantityTheme } from './productQuantity'
import productSummaryTheme from './productSummary'
import { searchBannerTheme } from './searchBanner'
import searchBarTheme from './searchBar'
import { searchTheme } from './searchFilter'
import searchSuggestionsTheme from './searchSuggestions'
import sliderTheme from './slider'

export default createTheme(
  searchBannerTheme,
  base,
  breadcrumb,
  minicart,
  infoCardTheme,
  headerTheme,
  productQuantityTheme,
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
