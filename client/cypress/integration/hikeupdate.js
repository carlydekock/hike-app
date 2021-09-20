describe('renders the update hike page', () => {
  it('renders correctly', () => {
    cy.visit('/hikes/1/update');
    cy.get('.nav-container').should('exist');
    cy.get('form').should('exist');
    cy.get('form').within(() => {
      cy.get('input').should('have.length', 8);
      cy.get('button').should('have.length', 1);
    });
  });
});