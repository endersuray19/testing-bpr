Cypress.Commands.add("login", (email) => {
  cy.visit("https://bpr.fullstressdigital.id/admin");
  cy.url().should("include", "/admin");
  cy.get("[type='email']").type(email);
  cy.get("[type='password']").type("123456");
  cy.get("button").contains("Sign in").should("be.visible").click();
});
