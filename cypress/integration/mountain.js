describe('should show mountain', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/#/mountain')
  })

  it('displays mountain picture at least 1', () => {
    cy.get('li > img').should((imgs) => {
      expect(imgs).to.have.length.greaterThan(1)
    })
  })
})
