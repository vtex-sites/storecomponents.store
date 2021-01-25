import { responsivePictureTheme, createTheme } from '@vtex/store-ui'

export const searchBannerTheme = createTheme(
  {
    searchBanner: {
      responsivePicture: responsivePictureTheme,
    },
  },
  {
    searchBanner: {
      responsivePicture: {
        img: {
          height: '238px',
        },
      },
    },
  }
)
