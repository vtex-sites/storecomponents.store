/// <reference types="cypress" />

context('Sample', () => {
  it('Adds a product to the cart', () => {
    cy.visit('/')

    // Add any product to the cart
    list('a', col => {
      const [href] = col.map(el => el.attr('href')).filter(href => href.endsWith('/p'))
      cy.get(`[href="${href}"] button`).should('not.be.disabled').click()
    })

    // Open mini cart
    cy.get('[aria-label="Open Cart"').click()

    // Assert there is one item on the cart
    cy.contains('Cart (1)')
  })
})

function list(selector, cb) {
  const res = []
  cy.get(selector)
    .each((el, idx, col) => {
      res.push(el)
      if (idx + 1 === col.length) {
        cb(res)
      }
    })
}
