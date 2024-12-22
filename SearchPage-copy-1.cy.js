export class SearchPage {
  visit() {
    cy.visit('https://www.amazon.com');
  }

  searchProduct(productName) {
    cy.get('#twotabsearchtextbox').type(productName); // Search input
    cy.get('#nav-search-submit-button').click(); // Search button
  }

  verifyResults() {
    cy.get('.s-search-results').should('be.visible'); // Search results container
  }
} 
