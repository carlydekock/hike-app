describe('renders the use profile page', () => {
  it('renders correctly', () => {
    cy.visit('/profile');
    cy.get('.nav-container').should('exist');
    cy.get('.navbar-nav').should('exist');
    cy.get('.nav-link').should('exist');
    cy.get('img').should('exist');
    cy.get('.row').should('exist');
  });
});