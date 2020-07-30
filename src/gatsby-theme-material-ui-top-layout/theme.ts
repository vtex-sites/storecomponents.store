import { createMuiTheme } from '@material-ui/core'

const theme = createMuiTheme({
  // Define custom style for HighLights Component
  // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
  // @ts-ignore
  // HighlightsRoot: {
  // backgroundColor: '#0f3e99',
  // paddingBottom: 14,
  // paddingTop: 14,
  // },
  palette: {
    primary: {
      main: '#0f3e99',
    },
  },
  overrides: {
    MuiButton: {
      root: {
        backgroundColor: '#0f3e99',
        color: 'white',
        textTransform: 'none',
        '&:hover': {
          backgroundColor: '#0f3e99',
        },
      },
    },
    MuiLink: {
      root: {
        color: 'inherit',
      },
    },
  },
})

export default theme
