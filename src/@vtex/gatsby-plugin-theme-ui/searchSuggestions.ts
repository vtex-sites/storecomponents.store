import { createTheme, SxStyleProp } from '@vtex/store-ui'
import searchSuggestionsTheme from '@vtex/gatsby-theme-vtex/components/SearchSuggestions/theme'

const theme: SxStyleProp = createTheme(searchSuggestionsTheme, {
  suggestions: {
    minWidth: ['19rem', '40rem'],

    position: 'absolute',
    right: [undefined, 0],
  },
})

export default theme
