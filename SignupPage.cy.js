export class RegisterPage {
  visit() {
    cy.visit('https://www.amazon.com');
  }

  clickRegisterButton() {
    cy.get('#nav-link-accountList').trigger('mouseover'); // Hover over account menu
    cy.contains('Start here.').click(); // Click "Start here" for registration
  }

  fillName(name) {
    cy.get('#ap_customer_name').type(name); // Name input
  }

  fillEmail(email) {
    cy.get('#ap_email').type(email); // Email input
  }

  fillPassword(password) {
    cy.get('#ap_password').type(password); // Password input
  }

  clickContinue() {
    cy.get('#continue').click(); // Continue button
  }
}
