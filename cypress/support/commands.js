Cypress.Commands.add('registerUser', (user) => {
  // 1. ვხსნით საიტს
  cy.visit('https://automationexercise.com');
  cy.contains('Signup / Login').click();

  // 2. ვავსებთ Signup ველებს
  cy.get('input[data-qa="signup-name"]').type(user.name);
  cy.get('input[data-qa="signup-email"]').type(user.email);
  cy.get('button[data-qa="signup-button"]').click();

  // 3. ვავსებთ რეგისტრაციის ფორმას
  cy.get('#password').type(user.password);
  cy.get('#days').select('10');
  cy.get('#months').select('May');
  cy.get('#years').select('1995');

  cy.get('#first_name').type(user.firstName);
  cy.get('#last_name').type(user.lastName);
  cy.get('#address1').type(user.address);
  cy.get('#country').select(user.country);

  cy.get('#state').type('user.state');
  cy.get('#city').type(user.city);
  cy.get('#zipcode').type(user.zipcode);
  cy.get('#mobile_number').type(user.mobile);

  // 4. ანგარიშის შექმნა
  cy.get('button[data-qa="create-account"]').click();

  // 5. შემოწმება
  cy.contains('Account Created!').should('be.visible');
  cy.get('a[data-qa="continue-button"]').click();

  // 6. Logged in as hugo უნდა გამოჩნდეს
  cy.contains(`Logged in as ${user.name}`).should('be.visible');
});
 // 7. hugo-ს შესვლა
Cypress.Commands.add('loginUser', (email, password) => {
  cy.visit('https://automationexercise.com');
  cy.contains('Signup / Login').click();

  cy.get('input[data-qa="login-email"]').type(email);
  cy.get('input[data-qa="login-password"]').type(password);
  cy.get('button[data-qa="login-button"]').click();
});