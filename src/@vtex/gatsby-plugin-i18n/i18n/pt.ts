import pt from '@vtex/gatsby-theme-store/i18n/pt.json'
import { searchSuggestionsI18nPT, minicartI18nPT } from '@vtex/store-ui'

export default {
  ...pt,

  ...minicartI18nPT,

  ...searchSuggestionsI18nPT,

  'shelf.title.0': 'Ofertas',

  'social.share': 'Compartilhar',

  'offer.product-unavailable': 'Product indisponivel',
  'offer.units-left': '{quantity} unidades!',
  'offer.installments': 'Ate {numberOfInstallments}x {value} sem juros',
  'offer.discount': ' Economize {price}',

  'productDetails.reference': 'Referencia',
  'product-not-found': 'Product não encontrado',
  'error-generic': 'Erro',
}
