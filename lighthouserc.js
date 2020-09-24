const VTEXLHConfig = require('@vtex/lighthouse-config').default

const { BASE_SITE_URL } = process.env

const server = BASE_SITE_URL
  ? BASE_SITE_URL.replace('.com', '.app')
  : 'http://localhost:9000'

const urls = ['/', '/vintage-phone/p/', '/apparel---accessories/']

module.exports = VTEXLHConfig({ urls, server })
