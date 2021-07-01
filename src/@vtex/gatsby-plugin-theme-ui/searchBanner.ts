import type { SxStyleProp } from '@vtex/store-ui'
import { createTheme, responsivePictureTheme } from '@vtex/store-ui'

export const searchBannerTheme: SxStyleProp = createTheme(
  {
    searchBanner: {
      responsivePicture: responsivePictureTheme,
    },
  },
  {
    searchBanner: {
      responsivePicture: {
        img: {
          aspectRatio: ['480 / 317', '3840 / 714'],
          height: '233px',
        },
      },
    },
  }
)
