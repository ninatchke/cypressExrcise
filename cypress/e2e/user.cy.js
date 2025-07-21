describe('User registration', () => {
  let user;

  before(() => {
    cy.fixture('user').then((data) => {
      user = data;
    });
  });

  it('Registers user with fixture and custom command', () => {
    cy.registerUser(user);
  });
});