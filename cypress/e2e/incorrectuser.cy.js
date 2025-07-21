it('Fails to log in with incorrect credentials', () => {
  cy.fixture('incorrectUser').then((user) => {
    cy.visit('https://automationexercise.com');
    cy.contains('Signup / Login').click();

    cy.get('input[data-qa="login-email"]').type(user.email);
    cy.get('input[data-qa="login-password"]').type(user.password);
    cy.get('button[data-qa="login-button"]').click();

    cy.contains('Your email or password is incorrect!').should('be.visible');
  });
});