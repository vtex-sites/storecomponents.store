import {
  createTheme,
  headerTheme,
  infoCardTheme,
  minicartTheme,
  searchControlsTheme
} from '@vtex/store-ui'

import { base } from './base'
import { custom } from './custom'
import { searchTheme } from './searchFilter'

export default createTheme(
  base,
  infoCardTheme,
  headerTheme,
  minicartTheme,
  searchControlsTheme,
  searchTheme,
  custom,
)
