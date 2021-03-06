describe('renders the home page', () => {
  it('renders correctly', () => {
    cy.visit('/');
    cy.get('.nav-container').should('exist');
    cy.get('.navbar-nav').should('exist');
    cy.get('.nav-link').should('exist');
    cy.get('button').should('exist');
    cy.get('img').should('exist');
    cy.get('p').should('exist');
  });
});