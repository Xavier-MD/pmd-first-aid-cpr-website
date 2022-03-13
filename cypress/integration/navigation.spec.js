describe('Navigation', () => {
  it('should visit root', () => {
    cy.visit('/');
  });

  it('should visit the about us page', () => {
    cy.visit('/about-us');
  });

  it('should visit the testimonials page', () => {
    cy.visit('/testimonials');
  });

  it('should visit the contact us page', () => {
    cy.visit('/contact-us');
  });

  it('should visit the error 404 page', () => {
    cy.visit('/foo-bar');
  });

  it('should navigate to the home page', () => {
    cy.visit('/');
    cy.contains('Home').click();
    cy.location('pathname').should('eq', '/');
  });

  it('should navigate to the about us page', () => {
    cy.visit('/');
    cy.contains('About Us').click();
    cy.location('pathname').should('eq', '/about-us');
  });

  it('should navigate to the testimonials page', () => {
    cy.visit('/');
    cy.contains('Testimonials').click();
    cy.location('pathname').should('eq', '/testimonials');
  });

  it('should navigate to the contact us page', () => {
    cy.visit('/');
    cy.contains('Contact Us').click();
    cy.location('pathname').should('eq', '/contact-us');
  });
});
