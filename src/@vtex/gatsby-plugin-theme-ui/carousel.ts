import type { SxStyleProp } from '@vtex/store-ui'
import { createTheme, responsivePictureTheme } from '@vtex/store-ui'

const paginationDots: SxStyleProp = {
  container: {
    paddingY: '10px',
    paddingX: 0,
    marginTop: '0.5rem',
    marginBottom: '0.5rem',
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    margin: 0,
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
    height: `0.725rem`,
    width: `0.725rem`,
  },
  activeDot: {
    bg: 'secondary',
    cursor: 'pointer',
    display: 'inline-block',
    borderRadius: '100%',
    margin: '12px 12px 12px 12px',
    padding: '0.25rem',
    borderWidth: 0,
    outline: '0',
    height: `0.725rem`,
    width: `0.725rem`,
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
  picture: {
    height: ['540px', '614px'],
  },
  img: {
    aspectRatio: ['900 / 1348', '1680 / 806'],
    height: ['540px', '614px'],
    zIndex: -2,
  },
})

const theme: SxStyleProp = {
  carousel: {
    position: 'relative',
    arrow: carouselArrows,
    paginationDots,
    responsivePicture: carouselResponsivePicture,
  },
}

export default theme
