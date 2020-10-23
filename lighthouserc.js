const VTEXLHConfig = require('@vtex/lighthouse-config').default

const urls = ['', '/vintage-phone/p', '/apparel---accessories']

module.exports = VTEXLHConfig({ urls, server: process.env.BASE_SITE_URL })
