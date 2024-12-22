export class RegisterPage {
  visit() {
    cy.visit('https://www.amazon.com');
  }

  clickRegisterButton() {
    cy.get('#nav-link-accountList').trigger('mouseover'); 
    cy.contains('Start here.').click(); 
  }

  fillName(name) {
    cy.get('#ap_customer_name').type(name); 
  }

  fillEmail(email) {
    cy.get('#ap_email').type(email); 
  }

  fillPassword(password) {
    cy.get('#ap_password').type(password); 
  }

  clickContinue() {
    cy.get('#continue').click();
  }
}
