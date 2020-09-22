import { createTheme, SxStyleProp } from '@vtex/store-ui'
import searchBarTheme from '@vtex/gatsby-theme-vtex/components/SearchBar/theme'

const theme: SxStyleProp = createTheme(searchBarTheme, {
  searchbar: {
    container: {
      marginTop: '0px',
      width: '250px',
      height: '40px',
    },
  },
})

export default theme
