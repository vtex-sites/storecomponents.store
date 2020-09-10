import {
  createTheme,
  headerTheme,
  infoCardTheme,
  minicartTheme,
  searchBarTheme,
  searchControlsTheme,
} from '@vtex/store-ui'

import { base } from './base'
import { custom } from './custom'
import { breadcrumb } from './breadcrumb'
import { searchTheme } from './searchFilter'

export default createTheme(
  base,
  breadcrumb,
  infoCardTheme,
  headerTheme,
  minicartTheme,
  searchControlsTheme,
  searchBarTheme,
  searchTheme,
  custom
)
