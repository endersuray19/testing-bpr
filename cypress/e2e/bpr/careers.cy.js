describe("Testing on Careers", () => {
  beforeEach("login", () => {
    cy.login("admin@gmail.com");
  });
  it("Read a Career", () => {
    cy.wait(1000);
    cy.get(".fi-sidebar-item").contains("Careers").click();
    cy.url().should("include", "/admin/careers");
  });
  it("Create a Career", () => {
    cy.wait(1000);
    cy.get(".fi-sidebar-item").contains("Careers").click();
    cy.url().should("include", "/admin/careers");
    //cy.get("h4").should("be.visible", "No Careers");
    cy.get(".fi-btn-label").contains("New career").should("be.visible").click();
    cy.url().should("include", "/admin/careers/create");
    cy.get("#data\\.name").type("Software Engineer");
    cy.get("#data\\.content").type(
      "'We are looking for a talented Software Engineer."
    );
    cy.get("input[type='file']").attachFile("images.jpeg");
    cy.get(".fi-btn-label").contains("Create").click();
    cy.get(".pointer-events-auto > .w-full").should("be.visible");
    cy.contains("Edit Career").should("be.visible");
    cy.get(".w-full > .fi-icon-btn").click();
  });
  it("Update a Career", () => {
    cy.get(".fi-sidebar-item").contains("Careers").click();
    cy.get(".fi-ta-actions > .fi-color-primary > .font-semibold")
      .contains("Edit")
      .eq(0)
      .click();
    cy.contains("Edit Career").should("be.visible");
    cy.get("#data\\.name").clear().type("Hardware Engineer");
    cy.get(".fi-btn-label").contains("Save changes").click();
    cy.contains("Saved").should("be.visible");
  });
  it("Deleted a Career", () => {
    cy.get(".fi-sidebar-item").contains("Careers").click();
    cy.get("tbody").find("img").its("length").should("be.gt", 0);
    cy.get(".fi-ta-actions > .fi-color-danger > .font-semibold")
      .contains("Delete")
      .eq(0)
      .click();
    cy.contains("Delete career").should("be.visible");
    cy.contains("Confirm").click();
    cy.contains("Deleted").should("be.visible");
    cy.get(".w-full > .fi-icon-btn").click();
  });
  after("Logout", () => {
    cy.wait(2000);
    cy.get("body").click();
    cy.get("button[aria-label='User menu']").click();
    cy.wait(2000);
    cy.get("span").contains("Sign out").should("be.visible").click();
    cy.wait(2000);
    cy.url().should("include", "/admin");
  });
});
