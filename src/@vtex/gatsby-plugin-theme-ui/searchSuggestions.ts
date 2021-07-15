import { createTheme, searchSuggestionsTheme } from '@vtex/store-ui'

export default createTheme(searchSuggestionsTheme, {
  suggestions: {
    minWidth: ['19rem', '40rem'],

    position: 'absolute',
    right: [undefined, 0],

    products: {
      list: {
        alignItems: 'center',
        overflowX: 'scroll',
        li: {
          maxWidth: '153px',
          px: '2px',
        },
      },
    },
  },
})
