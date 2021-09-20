describe('renders the home page', () => {
  it('renders correctly', () => {
    cy.visit('/');
    cy.get('.nav-container').should('exist');
    cy.get('.navbar-nav').should('exist');
    cy.get('.nav-link').should('exist');
  });
});