import type { SxStyleProp } from '@vtex/store-ui'
import { createTheme, minicartTheme } from '@vtex/store-ui'

const btn = {
  padding: 0,
  maxWidth: 40,
  minWidth: 40,
  height: 40,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'transparent',
  cursor: 'pointer',
}

const custom: SxStyleProp = {
  minicart: {
    drawer: {
      footer: {
        button: {
          cursor: 'pointer',
          '&:not(:disabled):hover': {
            backgroundColor: '#072c75',
          },
          '&:disabled': {
            background: '#eeeeee',
          },
        },
        checkout: {
          spinner: {
            display: 'flex',
            alignItems: 'center',
          },
        },
      },
      content: {
        product: {
          image: {
            maxWidth: 150,
          },
        },
        quantity: {
          width: 100,
          border: '2px solid #e3e4e6',

          wrapper: {
            marginTop: 3,
            alignItems: 'center',

            spinner: {
              marginLeft: 2,
            },
          },
        },
        delete: {
          marginLeft: 2,
          ...btn,
        },
      },
      warning: {
        px: ['6px', '16px'],
        py: ['10px', '16px'],
      },
    },
  },
}

export const minicart = createTheme(minicartTheme, custom)
