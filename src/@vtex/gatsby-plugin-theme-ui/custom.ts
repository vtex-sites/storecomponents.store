import { SxStyleProp } from '@vtex/store-ui'

const paginationDots: SxStyleProp = {
  container: {
    marginTop: '0.5rem',
    marginBottom: '0.5rem',
    position: 'absolute',
    justifyContent: 'center',
    display: 'flex',
    margin: 0,
    padding: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  dot: {
    bg: '#a8a8a8',
    cursor: 'pointer',
    display: 'inline-block',
    borderRadius: '100%',
    margin: '48px 12px 12px 12px',
    padding: '0.25rem',
    borderWidth: 0,
    outline: '0',
    height: `0.625rem`,
    width: `0.625rem`,
  },
  activeDot: {
    bg: '#f71963',
    cursor: 'pointer',
    display: 'inline-block',
    borderRadius: '100%',
    margin: '48px 12px 12px 12px',
    padding: '0.25rem',
    borderWidth: 0,
    outline: '0',
    height: `0.625rem`,
    width: `0.625rem`,
  },
}

export const custom: SxStyleProp = {
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
    dealsRow: {
      color: 'white',
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
  grids: {
    search: {
      my: 4,
      gap: 3,
    },
  },
  shelfTitle: {
    fontSize: '2.25rem',
    fontWeight: 200,
    color: '#727273',
  },
  summary: {
    offer: {
      mb: '32px',
    },
    name: {
      fontWeight: 600,
      fontSize: '18px',
      color: '#2e2e2e',
      marginTop: '1rem',
      marginBottom: '3rem',
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
      minWidth: '51px',
    },
    availability: {
      fontSize: '0.875',
      marginBottom: '0.5rem',
      color: '#727273',
    },
  },
  detail: {
    offer: {
      mb: '32px',
    },
    name: {
      fontWeight: 600,
      fontSize: '18px',
      color: '#2e2e2e',
      marginTop: '1rem',
      marginBottom: '3rem',
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
      minWidth: '51px',
    },
    availability: {
      fontSize: '0.875',
      marginBottom: '0.5rem',
      color: '#727273',
    },
  },
  productTitle: {
    mb: 4,
  },
  productPage: {
    container: {
      my: 4,
      mx: 0,
      flexDirection: 'column',
    },
  },
  carousel: {
    paginationDots,
  },
  shelf: {
    paginationDots: {
      ...paginationDots,
      container: {
        ...paginationDots.container,
        position: 'relative',
      },
      dot: {
        ...paginationDots.dot,
        margin: '24px 12px 12px 12px',
      },
      activeDot: {
        ...paginationDots.activeDot,
        margin: '24px 12px 12px 12px',
      },
    },
  },

  asyncShelfPlaceholder: {
    width: '100%',
    height: '585px',
  },
}
