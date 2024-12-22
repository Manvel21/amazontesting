export class DealsPage {
  visit() {
    cy.visit('https://www.amazon.com');  // Այց amazon-ի գլխավոր էջ
  }

  clickTodaysDeals() {
    cy.get('a[href="/gp/goldbox?ref_=nav_cs_gb"]').click({ force: true }); 
  }

  verifyDealsPage() {
    cy.url().should('include', '/gp/goldbox');  //Համոզվենք որ գտնվում ենք գործարքների էջում
    cy.get('.a-declarative').should('be.visible');  // Համոզվեք, որ գործարքների հատվածը տեսանելի է
  }
}
