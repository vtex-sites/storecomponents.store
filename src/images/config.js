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
  'searchBanner.desktop': {
    sourceWidth: 1920,
    aspectRatio: 3840 / 714,
    breakpoints: [1280, 1440, 1920],
    backgroundColor: '#D0D0D0',
    layout: 'fullWidth',
    options: {
      fitIn: true,
    },
  },
  'searchBanner.mobile': {
    sourceWidth: 720,
    aspectRatio: 480 / 317,
    breakpoints: [360, 480, 720],
    backgroundColor: '#D0D0D0',
    layout: 'fullWidth',
    options: {
      fitIn: true,
    },
  },
}
