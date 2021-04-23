import en from '@vtex/gatsby-theme-store/i18n/en.json'
import { searchSuggestionsI18nEN, minicartI18nEN } from '@vtex/store-ui'

export default {
  ...en,

  ...minicartI18nEN,

  ...searchSuggestionsI18nEN,

  'shelf.title.0': 'New Offers',

  'social.share': 'Share',

  'offer.product-unavailable': 'Product Unavailable',
  'offer.units-left': '{quantity} units left!',
  'offer.installments': 'Up to {numberOfInstallments}x {value} interest-free',
  'offer.discount': ' Save {price}',

  'productDetails.reference': 'Reference',
  'product-not-found': 'Product not found',
  'error-generic': 'Error',
}
