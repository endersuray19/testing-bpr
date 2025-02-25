describe("test on login", () => {
  it("login success", () => {
    cy.login("admin@gmail.com");
    cy.url().should("include", "/admin");
  });
  it("not an email", () => {
    cy.login("Adm3n");
    // cy.contains("Please include an '@' in the email address.").should(
    //   "be.visible"
    // );
    cy.wait(2000);
    cy.url().should("include", "/admin");
  });
  it("not in system", () => {
    cy.login("enderus@gmail.com");
    cy.get(".fi-fo-field-wrp-error-message")
      .contains("hese credentials do not match our records.")
      .should("be.visible");
    cy.url().should("include", "/admin");
  });
});
