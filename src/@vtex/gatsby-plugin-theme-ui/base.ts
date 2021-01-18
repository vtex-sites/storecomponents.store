import { baseTheme, createTheme } from '@vtex/store-ui'

// Testing 5
type Custom = {
  sizes: {
    container: string
  }
}

const custom: Custom = {
  sizes: {
    container: '98rem',
  },
}

export const base = createTheme(baseTheme, custom)
