describe('check all links in the home', () => {
  before(() => {
    cy.visit('/')
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(1000)
  })
  it('check all links to sites', () => {
    const localURL = new URL(Cypress.config().baseUrl)

    cy.get("a:not([href*='mailto:'])").each(($page) => {
      if (
        $page.prop('href') === Cypress.config().baseUrl ||
        $page.prop('href') === `${Cypress.config().baseUrl}/`
      ) {
        return
      }

      const url = new URL($page.prop('href'))

      if (url.hostname !== localURL.hostname) {
        return
      }

      cy.intercept('GET', `/page-data${url.pathname}/page-data.json`).as(
        `pageLoad${url.pathname}`
      )
      cy.visit($page.prop('href'), { failOnStatusCode: false })
      cy.wait(`@pageLoad${url.pathname}`)
        .its('response.statusCode')
        .then(($code) => {
          if ($code < 200 || $code > 399) {
            cy.log(`Unexpected response code ${$code} for path ${url.pathname}`)
          }
        })
    })
  })
})
