import { createMuiTheme } from '@material-ui/core'

const theme = createMuiTheme({
  overrides: {
    MuiButton: {
      root: {
        backgroundColor: '#FFF',
      },
    },
  },
})

export default theme
