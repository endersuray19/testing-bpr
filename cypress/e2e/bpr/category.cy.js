//test category
describe("Testing-Catgory", () => {
  beforeEach("loginSession", () => {
    cy.visit("https://bpr.fullstressdigital.id/admin/login");
    cy.get("input[type='email']").type("admin@gmail.com");
    cy.get("input[type='password']").type("123456");
    cy.wait(1000);
    cy.get("button").contains("Sign in").click();
    cy.wait(1000);
  });
  it("Creating a category", () => {
    cy.get("li").contains("Categories").should("be.visible").click();
    cy.wait(1000);
    cy.url().should("include", "/admin/product-categories");
    cy.contains("h4", "No Categories").should("be.visible");
    cy.wait(1000);
    cy.get("span").contains("New Category").should("be.visible").click();

    //create
    cy.url().should("include", "/admin/product-categories/create");
    cy.get("h1").should("be.visible", "Create Category");

    cy.get(`#data\\.name`).type("Akuntings");
    cy.get(`#data\\.description`).type(
      "Akunting (atau akuntansi) adalah proses sistematis dalam mencatat, mengklasifikasikan, menganalisis, dan melaporkan transaksi keuangan suatu entitas, seperti perusahaan, organisasi, atau individu. Tujuan utama akunting adalah menyediakan informasi keuangan yang akurat dan relevan untuk membantu pengambilan keputusan, baik bagi manajemen internal maupun pihak eksternal seperti investor, kreditur, dan regulator."
    );
    cy.get(".fi-btn-label").contains("Create & create another").click();
    cy.wait(2000);
    cy.get("#data\\.name").type("Akuntingsi");
    cy.get("#data\\.description").type(
      "Akunting (atau akuntansi) adalah proses sistematis dalam mencatat, mengklasifikasikan, menganalisis, dan melaporkan transaksi keuangan suatu entitas, seperti perusahaan, organisasi, atau individu. Tujuan utama akunting adalah menyediakan informasi keuangan yang akurat dan relevan untuk membantu pengambilan keputusan, baik bagi manajemen internal maupun pihak eksternal seperti investor, kreditur, dan regulator."
    );
    cy.get(".fi-btn-label").contains("Create").click();

    cy.get("button[title='Expand sidebar']").should("be.visible").click();
    cy.get(".fi-active > .fi-sidebar-item-button > .fi-sidebar-item-label")
      .should("be.visible")
      .click();
  });
  //update
  it("update a category", () => {
    cy.get("li").contains("Categories").should("be.visible").click();
    cy.get(":nth-child(2) > .fi-ta-actions-cell > .whitespace-nowrap").click();

    //update category
    cy.should("be.visible", "Edit Category");
    cy.get("#data\\.name").clear().type("Anime");
    cy.get("textarea")
      .clear()
      .type(
        `Anime adalah bentuk animasi yang berasal dari Jepang, yang memiliki gaya seni khas dan beragam genre cerita. Kata "anime" sendiri berasal dari bahasa Inggris "animation", tetapi di Jepang, istilah ini digunakan untuk merujuk pada semua jenis animasi, baik lokal maupun internasional. Namun, di luar Jepang, anime secara khusus mengacu pada animasi yang diproduksi di Jepang atau yang mengikuti gaya khas Jepang.`
      );

    cy.get('[x-show="! isProcessing"]').click();
    cy.get("button[title='Expand sidebar']").should("be.visible").click();
    cy.get(".fi-active > .fi-sidebar-item-button > .fi-sidebar-item-label")
      .should("be.visible")
      .click();

    cy.url().should("include", "/admin/product-categories");
    cy.contains("Anime").should("be.visible");
  });
  it("deleted  1", () => {
    cy.get("li").contains("Categories").should("be.visible").click();
    cy.wait(1000);
    cy.url().should("include", "/admin/product-categories");
    cy.get("td").its("length").should("be.gt", 0);
    cy.url().should("include", "/admin/product-categories");

    //checking
    cy.get("input[type='checkbox']").eq(2).click();
    cy.get(".fi-btn-label").contains("Bulk action").click();
    cy.get("button").contains("Delete selected").click();
    cy.contains("Delete selected Categories").should("be.visible");
    cy.contains("Confirm").click();
    cy.contains("Deleted").should("be.visible");
  });
  it("deleted  all", () => {
    cy.get("li").contains("Categories").should("be.visible").click();
    cy.wait(1000);
    cy.url().should("include", "/admin/product-categories");
    cy.get("td").its("length").should("be.gt", 0);
    cy.url().should("include", "/admin/product-categories");

    //checking
    cy.get("input[type='checkbox']").eq(0).click();
    cy.get(".fi-btn-label").contains("Bulk action").click();
    cy.get("button").contains("Delete selected").click();
    cy.wait(3000);
    cy.contains("Delete selected Categories").should("be.visible");
    cy.contains("Confirm").click();
    cy.contains("Deleted").should("be.visible");
  });
  //test error
  it("test same category", () => {
    cy.wait(1000);
    cy.get("li").contains("Categories").click();
    cy.wait(1000);
    cy.url().should("include", "/admin/product-categories");
    cy.get("span[class='fi-btn-label']")
      .contains("New Category")
      .should("be.visible")
      .click();
    cy.addCategoryOlahraga();
    cy.wait(2000);
    cy.addCategoryOlahraga();
    cy.get(".fi-fo-field-wrp-error-message")
      .contains("The name has already been taken.")
      .should("be.visible");
  });
  it.skip("deleted  all", () => {
    cy.get("li").contains("Categories").should("be.visible").click();
    cy.wait(1000);
    cy.url().should("include", "/admin/product-categories");
    cy.get("td").its("length").should("be.gt", 0);
    cy.url().should("include", "/admin/product-categories");

    //checking
    cy.get("input[type='checkbox']").eq(0).click();
    cy.get(".fi-btn-label").contains("Bulk action").click();
    cy.get("button").contains("Delete selected").click();
    cy.wait(3000);
    cy.contains("Delete selected Categories").should("be.visible");
    cy.contains("Confirm").click();
    cy.contains("Deleted").should("be.visible");
  });
});
