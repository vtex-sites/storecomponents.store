import { baseTheme, createTheme } from '@vtex/store-ui'

const custom: any = {
  sizes: {
    container: '98rem',
  },
}

export const base = createTheme(baseTheme, custom)
