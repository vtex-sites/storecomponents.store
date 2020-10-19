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
    margin: '12px 12px 12px 12px',
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
    margin: '12px 12px 12px 12px',
    padding: '0.25rem',
    borderWidth: 0,
    outline: '0',
    height: `0.625rem`,
    width: `0.625rem`,
  },
}

const theme: SxStyleProp = {
  carousel: {
    paginationDots,
  },

  shelf: {
    default: {
      container: {
        width: '100%',
        height: '585px',
        marginTop: '20px',
        marginBottom: '120px',
      },

      title: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '32px',
        fontWeight: 200,
        my: '20px',
      },

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
  },
}

export default theme
