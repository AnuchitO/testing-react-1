describe('search', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/#/')
    cy.get('[data-cy=search-title]').as('searchTitle')
  })

  it('displays mountain picture at least 1', () => {
    cy.get('input[type=text]').type('sea')
    cy.get('[data-cy=search-btn]').click()

    cy.get('@searchTitle').should('contain', 'sea Images')
    cy.get('li > img').should((imgs) => {
      expect(imgs).to.have.length.greaterThan(1)
    })
  })

  it('should default menu beaches', () => {
    cy.get('.main-nav > ul > li').contains('Beaches').click()

    cy.get('@searchTitle').should('contain', 'beach Pictures')
  })
})
