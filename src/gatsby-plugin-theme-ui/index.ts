import { baseTheme, cardTheme } from '@vtex/store-ui'

export default {
  ...baseTheme,
  ...cardTheme,
  header: {
    bg: 'muted',
    px: [0, 2, 4],
    py: 3,
    justifyContent: ['center', 'space-between', 'space-between'],
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  'rich-text': {
    default: {
      color: 'textBold',
      fontSize: 2,
      fontWeight: 'bold',
      textAlign: 'center',
      textTransform: 'uppercase',
    },
    question: {
      color: 'textBold',
      fontSize: 5,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    link: {
      color: 'textBold',
      fontSize: 4,
      textAlign: 'center',
      textTransform: 'uppercase',
      textDecoration: 'none',
    },
  },
  'notification-bar': {
    display: ['none', 'none', 'none', 'flex'],
    alignItems: 'center',
    textDecoration: 'underline',
    justifyContent: 'center',
    background: '#e0efe0',
    color: 'textBold',
    minHeight: '48px',
    fontWeight: 'bold',
    fontSize: 0,
  },
  overmenu: {
    display: ['none', 'none', 'none', 'flex'],
    alignItems: 'center',
    justifyContent: 'center',
    textDecoration: 'none',
    background: '#02003d',
    minHeight: '48px',
    color: 'muted',
    fontSize: 1,
    px: '16px',
    a: {
      mx: '24px',
      alignItems: 'center',
      justifyContent: 'center',
      textDecoration: 'none',
      color: 'inherit',
      '&.active': {
        color: 'textMuted',
      },
      '&:hover': {
        color: 'textMuted',
      },
    },
  },
  'header-left': {
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  'header-right': {
    alignItems: 'center',
  },
  'header-menu': {
    marginLeft: [0, 0, 4],
    my: [3, 0, 0],
    a: {
      textDecoration: 'none',
      color: 'inherit',
      mx: [2, 3, 3],
      '&.active': {
        color: 'primary',
      },
      '&:hover': {
        color: 'primary',
      },
    },
  },
  'header-search': {
    maxWidth: 250,
    background: '#fff',
    border: '2px solid #e3e4e6',
    px: 3,
    '&:hover': {
      borderColor: '#cacbcc',
    },
  },
  buttons: {
    loadMore: {
      width: '100%',
      cursor: 'pointer',
      '&:disabled': {
        cursor: 'default',
        background: '#fff',
        color: 'text',
      },
    },
  },
  shelfTitle: {
    fontSize: '2.25rem',
    fontWeight: 200,
    color: '#727273',
  },
  summary: {
    offer: {
      mb: '32px'
    },
    name: {
      fontWeight: 600,
      fontSize: '18px',
      color: '#2e2e2e',
      marginTop: '1rem',
      marginBottom: '3rem'
    },
    listPrice: {
      textDecoration: 'line-through',
      fontSize: '.875rem',
      minHeight: '21px',
      color: '#727273',
    },
    price: {
      fontSize: '1.25rem',
      fontWeight: 600,
      color: '#2e2e2e',
    },
    discountBadge: {
      fontSize: '0.875rem',
      fontWeight: 600,
      color: '#fff',
      backgroundColor: '#077b0b',
      borderRadius: '1000px',
      alignItems: 'center',
      paddingLeft: '0.5rem',
      paddingRight: '0.5rem',
      marginLeft: '0.5rem',
      minWidth: '51px'
    },
    availability: {
      fontSize: '0.875',
      marginBottom: '0.5rem',
      color: '#727273'
    }
  },
  detail: {
    offer: {
      mb: '32px'
    },
    name: {
      fontWeight: 600,
      fontSize: '18px',
      color: '#2e2e2e',
      marginTop: '1rem',
      marginBottom: '3rem'
    },
    listPrice: {
      textDecoration: 'line-through',
      fontSize: '.875rem',
      minHeight: '21px',
      color: '#727273',
    },
    price: {
      fontSize: '1.25rem',
      fontWeight: 600,
      color: '#2e2e2e',
    },
    discountBadge: {
      fontSize: '0.875rem',
      fontWeight: 600,
      color: '#fff',
      backgroundColor: '#077b0b',
      borderRadius: '1000px',
      alignItems: 'center',
      paddingLeft: '0.5rem',
      paddingRight: '0.5rem',
      marginLeft: '0.5rem',
      minWidth: '51px'
    },
    availability: {
      fontSize: '0.875',
      marginBottom: '0.5rem',
      color: '#727273'
    }
  },
  'header-minicart': {
    background: '#f0f0f0',
    position: 'relative',
    marginLeft: 2,
    cursor: 'pointer',
  },
  'header-minicart-badge': {
    background: '#f71963',
    borderRadius: '100%',
    height: 16,
    position: 'absolute',
    width: 16,
    top: 0,
    right: 0,
    fontSize: 10,
  },
  productTitle: {
    mb: 4,
  },
}
