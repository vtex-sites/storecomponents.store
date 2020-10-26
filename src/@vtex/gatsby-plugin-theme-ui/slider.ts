import {
  createTheme,
  responsivePictureTheme,
  SxStyleProp,
} from '@vtex/store-ui'

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

const shelfPaginationDots: SxStyleProp = createTheme(paginationDots, {
  container: {
    position: 'relative',
  },
})

const shelfArrows: SxStyleProp = {
  left: {
    button: {
      bg: 'transparent',
      borderColor: 'transparent',
      cursor: 'pointer',

      '&:hover': {
        opacity: '0.5',
      },
    },

    svg: {
      color: 'text',
    },
  },

  right: {
    button: {
      bg: 'transparent',
      borderColor: 'transparent',
      cursor: 'pointer',

      '&:hover': {
        opacity: '0.5',
      },
    },

    svg: {
      color: 'text',
    },
  },
}

const carouselArrows: SxStyleProp = {
  left: {
    button: {
      position: 'absolute',
      top: '50%',
      left: 0,
      zIndex: 1,
      bg: 'transparent',
      borderColor: 'transparent',
      cursor: 'pointer',

      '&:hover': {
        opacity: '0.5',
      },
    },

    svg: {
      color: 'text',
    },
  },

  right: {
    button: {
      position: 'absolute',
      top: '50%',
      right: 0,
      zIndex: 1,
      bg: 'transparent',
      borderColor: 'transparent',
      cursor: 'pointer',

      '&:hover': {
        opacity: '0.5',
      },
    },

    svg: {
      color: 'text',
    },
  },
}

const carouselResponsivePicture = createTheme(responsivePictureTheme, {
  img: {
    height: ['540px', '806px'],
    width: 'auto',
  },
})

const theme: SxStyleProp = {
  productImageGallery: {
    position: 'relative',
    mx: 2,
    arrow: carouselArrows,
    paginationDots: shelfPaginationDots,
    img: { width: '100%' },
  },

  carousel: {
    position: 'relative',
    arrow: carouselArrows,
    paginationDots,
    responsivePicture: carouselResponsivePicture,
  },

  shelf: {
    default: {
      arrow: shelfArrows,

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

      paginationDots: shelfPaginationDots,
    },
  },
}

export default theme
