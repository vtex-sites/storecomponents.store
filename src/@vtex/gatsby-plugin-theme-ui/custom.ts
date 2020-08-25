import { SxStyleProp } from "@vtex/store-ui";

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
}
