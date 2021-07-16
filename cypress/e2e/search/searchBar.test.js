const { checkIfElementExists } =
  require('@vtex/test-tools/dist/cypress').default

describe('Searchbar', () => {
  it('finds a very specific product using the search bar', () => {
    cy.visit('/')

    cy.getById('searchBarInput').eq(0).click({ force: true })
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(2000)
    cy.getById('searchBarInput').eq(0).type('Tank')

    cy.getById('searchSuggestionsItem').contains('Tank').click({ force: true })

    checkIfElementExists('addToCart')
  })
})
