describe('renders the my hikes list page', () => {
  it('renders correctly', () => {
    cy.visit('/list');
    cy.get('.nav-container').should('exist');
    cy.get('.table').should('exist');
    cy.get('.table').within(() => {
      cy.get('th').should('have.length', 6);
      cy.get('tr').should('exist');
    });
  });
});