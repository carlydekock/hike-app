describe('renders the home page after auth with hikes list', () => {
  it('renders correctly', () => {
    cy.visit('/');
    cy.get('.nav-container').should('exist');
    cy.get('form').should('exist');
    cy.get('.btn').should('exist');
    cy.get('form').within(() => {
      cy.get('input').should('have.length', 8);
      cy.get('button').should('have.length', 7);
    });
    cy.get('.table').should('exist');
    cy.get('.table').within(() => {
      cy.get('th').should('have.length', 6);
      cy.get('tr').should('exist');
    })
  });
});