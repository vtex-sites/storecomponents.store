module.exports = {
  'carousel.desktop': {
    sourceWidth: 3840,
    aspectRatio: 1440 / 690,
    breakpoints: [1280, 1920, 2880, 3840],
    backgroundColor: '#EDEDED',
    layout: 'fullWidth',
    options: {
      fitIn: true,
    },
  },
  'carousel.mobile': {
    sourceWidth: 720,
    aspectRatio: 900 / 1348,
    breakpoints: [360, 480, 720],
    backgroundColor: '#EDEDED',
    layout: 'fullWidth',
    options: {
      fitIn: true,
    },
  },
}
