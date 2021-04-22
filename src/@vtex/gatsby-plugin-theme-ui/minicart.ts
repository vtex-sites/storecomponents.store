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

const drawer: SxStyleProp = {
  footer: {
    button: {
      cursor: 'pointer',
      '&:hover': {
        backgroundColor: '#072c75',
      },
    },

    checkout: {
      spinner: {
        color: '#fff',
      },
    },
  },
  header: {
    close: {
      bg: '#fff',
    },
  },
  content: {
    product: {
      image: {
        maxWidth: 150,
      },
    },
    quantity: {
      marginTop: 3,
      alignItems: 'center',

      spinner: {
        marginLeft: 2,
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
}

const theme: SxStyleProp = {
  minicart: {
    default: {
      drawer,
    },
  },
}

export default createTheme(minicartTheme, theme)
