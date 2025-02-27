describe("test-products", () => {
  beforeEach("login", () => {
    cy.login("admin@gmail.com");
  });
  it("Create a product", () => {
    cy.contains("Products").should("be.visible").click();
    cy.url().should("include", "/admin/products");
    cy.get(".fi-btn-label")
      .contains("New product")
      .should("be.visible")
      .click();
    cy.url().should("include", "/admin/products/create");

    cy.get("#data\\.name").type("Dumbbell");
    cy.wait(2000);
    cy.get("select").select("40", { force: true });
    cy.wait(2000);
    cy.get("[type='file']").attachFile(
      "hex-dumbel-latihan-beban-cross-training-15-kg-hitam-corength-8603285.jpg"
    );
    cy.get("#data\\.collateral_name").type("-dumbel-latihan");
    cy.wait(5000);
    cy.get(".fi-btn-label").contains("Create").should("be.visible").click();

    cy.wait(5000);
    cy.get(".filepond--action-remove-item").click();
    cy.wait(3000);
    cy.get(".fi-btn-label").contains("Cancel").click();
  });
  it("update on dumbbell", () => {
    cy.contains("Products").should("be.visible").click();

    cy.get(".fi-ta-actions > .fi-color-primary > .font-semibold")
      .contains("Edit")
      .click();
    cy.get("#data\\.name")
      .clear()
      .type("CROSSFIT HEX DUMBELL 15KG SET 15 KG KILOGRAMS HOME GYM EQUIPMENT");
    cy.get("#data\\.collateral_name")
      .clear()
      .type("CROSSFIT-HEX-DUMBELL-15KG-SET-15-KG-KILOGRAMS-HOME-GYM-EQUIPMENT");
    cy.wait(5000);
    cy.get(".filepond--action-remove-item").click();
    cy.wait(3000);
    cy.get("input[type='file']").attachFile(
      "0309a2e5-8e4e-4162-8eec-30480633d133.jpg"
    );
    cy.wait(3000);
    cy.get(".fi-btn-label").contains("Save changes").click();
  });
  it("Delete product through update", () => {
    cy.contains("Products").click();
    cy.get(".fi-ta-actions > .fi-color-primary > .font-semibold")
      .contains("Edit")
      .click();
    cy.get("#data\\.name").should(
      "have.value",
      "CROSSFIT HEX DUMBELL 15KG SET 15 KG KILOGRAMS HOME GYM EQUIPMENT"
    );
    cy.get(".fi-btn-label").contains("Delete").click();
    cy.contains("Delete Product").should("be.visible");
    cy.contains("Confirm").click();
    cy.wait(2000);
    cy.contains("Deleted").should("be.visible");
    cy.url().should("include", "/admin/products");
  });
});
