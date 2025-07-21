describe('Login with correct credentials', () => {
  let user;

  before(() => {
    cy.fixture('USER').then((data) => {
      user = data;
    });
  });

  it('Logs in with correct email and password', () => {
    cy.loginUser(user.email, user.password);
    cy.contains(`Logged in as ${user.name}`).should('be.visible');
  });
});  