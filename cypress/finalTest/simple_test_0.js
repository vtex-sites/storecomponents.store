describe('File test 0', () => {
    it('File:0 (1)', () => {
        cy.intercept(/operationName=SearchQuery/)
        expect(true).to.equal(true)
    })
    it('File:0 (2)', () => {
        expect(true).to.equal(true)
    })
    it('File:0 (3)', () => {
        expect(true).to.equal(true)
    })
    it('File:0 (4)', () => {
        expect(true).to.equal(true)
    })
    it('File:0 (5)', () => {
        // import "faillib"
        expect(true).to.equal(true)
    })
})