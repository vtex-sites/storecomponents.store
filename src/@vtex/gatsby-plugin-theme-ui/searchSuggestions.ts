import { createTheme, searchSuggestionsTheme } from '@vtex/store-ui'

export default createTheme(searchSuggestionsTheme, {
  suggestions: {
    minWidth: ['19rem', '40rem'],

    position: 'absolute',
    right: [undefined, 0],
  },
})
