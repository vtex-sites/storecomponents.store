import {
  baseTheme,
  createTheme,
  headerTheme,
  infoCardTheme,
  minicartTheme,
} from '@vtex/store-ui'

import { custom } from './custom'

export default createTheme(
  baseTheme,
  infoCardTheme,
  headerTheme,
  minicartTheme,
  custom
)
