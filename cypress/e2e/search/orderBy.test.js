const { goToSearchPage, checkIfElementExists } =
  require('@vtex/test-tools/dist/cypress').default

describe('OrderBy filter', () => {
  /*
    Constants
  */
  const PRICE_REGEX = /\d{1,3}(?:[.,]\d{3})*(?:[.,]\d{2})/g

  const formatPrice = (price) => {
    if (!price) return

    return parseFloat(price.replace(',', '.'))
  }

  before(() => {
    cy.visit('/')
    goToSearchPage({ random: true })
  })

  it('tests price-desc option', () => {
    cy.get('[aria-label="Refine Search"]').select('price-desc')

    cy.url().should('include', 'price-desc')

    if (checkIfElementExists('offerPrice')) {
      cy.getById('offerPrice').then((productPriceList) => {
        const prices = []

        productPriceList.each((_, productPrice) => {
          const price = PRICE_REGEX.exec(productPrice.textContent) || []

          prices.push(formatPrice(price[0]))
        })

        const sortedPrices = prices.sort((a, b) => a - b)

        expect(prices).to.equal(sortedPrices)
      })
    }
  })

  it('tests price-asc order option', () => {
    goToSearchPage('automotivo')
    cy.get('[aria-label="Refine Search"]').select('price-asc')

    cy.url().should('include', 'price-asc')

    if (checkIfElementExists('offerPrice')) {
      cy.getById('offerPrice').then((productPriceList) => {
        const prices = []

        productPriceList.each((_, productPrice) => {
          const price = PRICE_REGEX.exec(productPrice.textContent) || []

          prices.push(formatPrice(price[0]))
        })

        const sortedPrices = prices.sort((a, b) => b - a)

        expect(prices).to.equal(sortedPrices)
      })
    }
  })

  it('tests name-asc order option', () => {
    cy.get('[aria-label="Refine Search"]').select('name-asc')

    cy.url().should('include', 'name-asc')

    if (checkIfElementExists('offerPrice')) {
      cy.getById('productSummaryTitle').then((productPriceList) => {
        const prices = []

        productPriceList.each((_, productPrice) => {
          const price = PRICE_REGEX.exec(productPrice.textContent) || []

          prices.push(formatPrice(price[0]))
        })

        const sortedPrices = prices.sort((a, b) => b - a)

        expect(prices).to.equal(sortedPrices)
      })
    }
  })

  it('tests name-desc order option', () => {
    cy.get('[aria-label="Refine Search"]').select('name-desc')

    cy.url().should('include', 'name-desc')

    if (checkIfElementExists('offerPrice')) {
      cy.getById('productSummaryTitle', {
        timeout: 10000,
      }).then((productSummaryNames) => {
        const names = []

        productSummaryNames.each((_, productName) => {
          names.push(productName.textContent)
        })

        const sortedNames = names.sort((a, b) => (a < b ? 1 : -1))

        expect(names).to.equal(sortedNames)
      })
    }
  })

  it('tests name-asc option', () => {
    cy.get('[aria-label="Refine Search"]').select('name-asc')

    cy.url().should('include', 'name-asc')

    if (checkIfElementExists('offerPrice')) {
      cy.getById('productSummaryTitle').then((productSummaryNames) => {
        const names = []

        productSummaryNames.each((_, productName) => {
          names.push(productName.textContent)
        })

        const sortedNames = names.sort((a, b) => (a < b ? -1 : 1))

        expect(names).to.equal(sortedNames)
      })
    }
  })

  it('tests orders-descending order option', () => {
    cy.get('[aria-label="Refine Search"]').select('orders-desc')
    cy.url().should('include', 'orders-desc')
  })

  it('tests discount-descending order option', () => {
    cy.get('[aria-label="Refine Search"]').select('discount-desc')
    cy.url().should('include', 'discount-desc')
  })

  it('tests release-descending order option', () => {
    cy.get('[aria-label="Refine Search"]').select('release-desc')
    cy.url().should('include', 'release-desc')
  })
})
