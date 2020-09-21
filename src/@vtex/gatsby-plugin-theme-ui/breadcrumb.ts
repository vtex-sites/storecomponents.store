import { createTheme, breadcrumbTheme, SxStyleProp } from '@vtex/store-ui'

const custom: SxStyleProp = {
  breadcrumb: {
    container: {
      alignItems: 'center',
      paddingTop: '0.5rem',
      paddingBottom: '0.5rem',
    },
    pair: {
      alignItems: 'center',
    },
    middle: {
      textDecoration: 'none',
      '&:hover': {
        textDecoration: 'underline',
      },
      color: '#000',
      margin: '0 0.5rem',
    },
    last: {
      textDecoration: 'none',
      '&:hover': {
        textDecoration: 'underline',
      },
      fontSize: '30px',
      color: '#000',
      margin: '0 0.5rem',
    },
    homeIcon: {
      fill: '#000',
      marginRight: '0.5rem',
    },
    caretIcon: {
      fill: '#e6e6e6',
    },
  },
}

export const breadcrumb = createTheme(breadcrumbTheme, custom)

function privateFn(a: string) {
    return 'private:' + a
}

export const testFn = () => {
  console.log(privateFn(a, 'dois'))
}