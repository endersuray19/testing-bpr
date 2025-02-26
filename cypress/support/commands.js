import "cypress-file-upload";

Cypress.Commands.add("login", (email) => {
  cy.visit("https://bpr.fullstressdigital.id/admin");
  cy.url().should("include", "/admin");
  cy.get("[type='email']").type(email);
  cy.get("[type='password']").type("123456");
  cy.get("button").contains("Sign in").should("be.visible").click();
});
Cypress.Commands.add("addCategoryOlahraga", () => {
  cy.get("#data\\.name").type("Olahraga").should("be.visible");
  cy.get("#data\\.description")
    .type(
      "Olahraga adalah aktivitas fisik yang dilakukan secara teratur untuk meningkatkan kebugaran tubuh, kesehatan, dan keterampilan tertentu. Olahraga dapat dilakukan secara individu atau berkelompok, serta memiliki berbagai bentuk, mulai dari latihan ringan hingga kompetisi profesional."
    )
    .should("be.visible");
  cy.get(".fi-btn-label")
    .contains("Create & create another")
    .should("be.visible")
    .click();
});
