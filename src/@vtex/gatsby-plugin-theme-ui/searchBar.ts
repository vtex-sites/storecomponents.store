import { createTheme, SxStyleProp } from '@vtex/store-ui'
import searchBarTheme from '@vtex/gatsby-theme-store/components/SearchBar/theme'

const theme: SxStyleProp = createTheme(searchBarTheme, {
  searchbar: {
    textInput: {
      maxHeight: '40px',
    },

    container: {
      marginTop: '0px',
      width: '250px',
      height: '45px',
      borderWidth: '1px',
    },

    button: {
      maxHeight: '40px',
    },
  },
})

export default theme
