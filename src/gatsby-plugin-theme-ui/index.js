export default {
  header: {
    bg: 'muted',
    px: [0, 2, 4],
    py: 3,
    justifyContent: ['center', 'space-between', 'space-between'],
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  'header-left': {
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  'header-right': {
    alignItems: 'center',
  },
  'header-menu': {
    marginLeft: [0, 0, 4],
    my: [3, 0, 0],
    a: {
      textDecoration: 'none',
      color: 'inherit',
      mx: [2, 3, 3],
      '&.active': {
        color: 'primary',
      },
      '&:hover': {
        color: 'primary',
      },
    },
  },
  'header-search': {
    maxWidth: 250,
    background: '#fff',
    border: '2px solid #e3e4e6',
    px: 3,
    '&:hover': {
      borderColor: '#cacbcc',
    },
  },
  loadMore: {
    cursor: 'pointer',
    '&:disabled': {
      cursor: 'default',
      background: '#fff',
      color: 'text',
    },
  },
  'header-minicart': {
    background: '#f0f0f0',
    position: 'relative',
    marginLeft: 2,
    cursor: 'pointer',
  },
  'header-minicart-badge': {
    background: '#f71963',
    borderRadius: '100%',
    height: 16,
    position: 'absolute',
    width: 16,
    top: 0,
    right: 0,
    fontSize: 10,
  },
  productTitle: {
    mb: 4,
  },
  breakpoints: ['40em', '56em', '64em'],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fonts: {
    body:
      'San Francisco, -apple-system, BlinkMacSystemFont, avenir next, avenir, helvetica neue, helvetica, ubuntu, roboto, noto, segoe ui, arial, sans-serif',
    heading: 'inherit',
    monospace: 'Menlo, monospace',
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  colors: {
    text: '#3f3f40',
    textMuted: '#979899',
    background: '#fff',
    primary: '#0f3e99',
    muted: '#f0f0f0',
  },
  styles: {
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body',
    },
    img: {
      maxWidth: '100%',
    },
  },
}
