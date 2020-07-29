import { createMuiTheme } from '@material-ui/core'

const theme = createMuiTheme({
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
