const { goToSearchPage } = require('@vtex/test-tools/dist/cypress').default

describe('Navigation between search pages', () => {
  before(() => {
    cy.visit('/').then(() => {})
    goToSearchPage({ pageIndex: 0 })
  })

  it('navigates to another search page', () => {
    cy.getById('breadcrumb')

    goToSearchPage({ random: true })
  })
})
