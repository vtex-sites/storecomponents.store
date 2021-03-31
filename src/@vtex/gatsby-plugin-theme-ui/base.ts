import type { SxStyleProp } from '@vtex/store-ui'
import { baseTheme, createTheme } from '@vtex/store-ui'

const custom = ({
  sizes: {
    container: '98rem',
  },
  colors: {
    primary: '#03034e',
  },
} as unknown) as SxStyleProp

export const base = createTheme(baseTheme, custom)
