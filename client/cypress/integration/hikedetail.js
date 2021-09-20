describe('renders the hike detail page', () => {
  it('renders correctly', () => {
    cy.visit('/hikes/1');
    cy.get('.nav-container').should('exist');
    cy.get('.table').should('exist');
    cy.get('.table').within(() => {
      cy.get('tr').should('exist');
      cy.get('tr').should('have.length', 8)
    });
    cy.get('.card').should('exist');
    cy.get('form').should('exist');
    cy.get('form').within(() => {
      cy.get('input').should('have.length', 3);
      cy.get('textarea').should('exist');
      cy.get('button').should('have.length', 1);
    });
  });
});