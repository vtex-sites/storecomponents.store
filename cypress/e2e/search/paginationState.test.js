describe('Pagination state', () => {
  before(() => {
    cy.visit('/apparel---accessories')
  })
  it('tests if the pagination state is kept after page changes', () => {
    cy.intercept('GET', '/page-data/sq/d/2067307710.json').as('itemLoad')

    cy.getById('productSummaryContainer').should('have.length', 12)

    cy.get('[aria-label="Show More"]').should('be.visible')

    cy.getById('offerPrice')

    cy.scrollTo(0, '100%')

    cy.get('[aria-label="Show More"]').click({
      force: true,
      position: 'center',
    })

    cy.getById('productSummaryContainer').should('have.length', 19)

    cy.getById('productSummaryContainer').eq(13).click({ force: true })
    cy.wait('@itemLoad')
    // make sure page loaded
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(500)
    cy.go('back')

    cy.getById('productSummaryContainer').should('have.length', 19)
  })
})
