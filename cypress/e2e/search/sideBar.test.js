const { goToSearchPage, resolveIdentifier } =
  require('@vtex/test-tools/dist/cypress').default

describe('Sidebar filter', () => {
  /*
    Pages: *
    Selectors: {{ param }}
  */
  const getText = (dataId, { index } = {}) => {
    if (index !== undefined) {
      return Cypress.$(resolveIdentifier(dataId)).eq(index).text()
    }

    return Cypress.$(resolveIdentifier(dataId)).text()
  }

  const filterCategory = () => {
    cy.get('[data-testid="collapsibleHeader"]').eq(8).click({
      force: true,
    })

    cy.get('[data-testid="collapsible-Categoria"]')
      .find('li')
      .eq(0)
      .click({ force: true })

    cy.location().url().should('include', 'map=')

    cy.get('[data-testid="breadcrumb"] div:nth-child(3)').should(
      ($breadcrumbTitle) => {
        expect($breadcrumbTitle).to.have.text(
          getText(['collapsible-Categoria', 'filterItemValue'], {
            index: 0,
          })
        )
      }
    )
  }

  before(() => {
    cy.visit('/')
    goToSearchPage({ random: true })
  })

  it('checks if there is duplicated filters', () => {
    for (let i = 0; i < 15; i++) {
      cy.visit('/')
      if (goToSearchPage({ pageIndex: i })) {
        cy.get('[data-testid="collapsibleHeader"]').then((headers) => {
          headers = headers.map((_, header = '') => {
            return (
              header && header.textContent && header.textContent.toLowerCase()
            )
          })

          const uniqueHeaders = [...new Set(headers)]

          expect(uniqueHeaders.length).to.equal(headers.length)
        })
      }
    }
  })

  it('tests the use of the category filter', () => {
    cy.get('[data-testid="collapsibleHeader"]').each((header) => {
      if (header.text() === 'Categoria') filterCategory()
    })
  })
})
