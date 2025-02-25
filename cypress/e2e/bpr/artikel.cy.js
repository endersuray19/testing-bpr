describe("test on article", () => {
  it("create a article", () => {
    cy.login("admin@gmail.com");
    cy.url().should("include", "/admin");
    cy.get(".fi-sidebar-item").contains("Articles").click();
    cy.url().should("include", "/admin/articles");

    cy.get(".fi-btn-label").contains("New article").click();
    cy.url().should("include", "/admin/articles/create");

    cy.get("input[placeholder='Title']").type(
      "Siapa itu Teto, si ratu yang berteman dengan Mike ?"
    );
    cy.get("textarea[placeholder='Meta description']").type(
      "Teto adalah karakter ikonik dalam budaya pop digital yang awalnya dikenal sebagai bagian dari proyek komunitas. Dengan desain unik dan suara khas, Teto berkembang menjadi simbol kreativitas dan terus menginspirasi banyak penggemar melalui musik, ilustrasi, dan animasi."
    );
    cy.get("#data\\.content")
      .type(`"Teto adalah salah satu karakter yang memiliki sejarah unik dalam budaya pop digital. Awalnya, Teto dikenal sebagai bagian dari sebuah proyek komunitas yang berkembang di internet. Meskipun pada awalnya dianggap sebagai lelucon atau hoaks, popularitasnya meningkat dengan cepat, terutama di kalangan penggemar musik dan seni digital.

    Teto pertama kali diperkenalkan sebagai karakter dengan latar belakang yang dibuat-buat, tetapi seiring waktu, ia mendapatkan basis penggemar yang kuat. Berbagai kreator mulai membuat lagu, ilustrasi, dan animasi yang menampilkan Teto, yang kemudian menjadikannya ikon dalam komunitas tertentu. Keunikan desain dan suara yang khas membuat Teto semakin dikenal luas.

    Keberadaan Teto juga tidak lepas dari teknologi yang mendukungnya. Dengan berbagai alat dan perangkat lunak yang terus berkembang, banyak penggemar yang dapat menciptakan karya-karya baru yang berkaitan dengan karakter ini. Hal ini membuat Teto terus bertahan dan relevan dalam berbagai bentuk ekspresi kreatif.

    Hingga saat ini, Teto tetap menjadi bagian penting dalam dunia kreatif digital. Ia tidak hanya sekadar karakter, tetapi juga simbol dari bagaimana komunitas internet dapat menciptakan sesuatu yang bertahan lama melalui kolaborasi dan dedikasi. Dengan semakin banyaknya konten yang dibuat oleh penggemar, Teto terus berkembang dan menjadi inspirasi bagi banyak orang."`);

    cy.get("input[type='file']").attachFile("hq720.jpg", { force: true });

    cy.wait(2000);
    cy.get("#data\\.keywords").eq(1).type("tetasss");

    cy.get("input[placeholder='Title']").click();
    cy.get("#data\\.keywords").eq(1).type("anime");
    cy.get("input[placeholder='Title']").click();
    cy.get("#data\\.keywords").eq(1).type("tetasss");
    cy.get("input[placeholder='Title']").click();
    cy.get("button").contains("Create").should("be.visible").click();
    cy.wait(2000);

    cy.get(".fi-no-notification-title").should("be.visible");
    cy.get(".fi-topbar-open-sidebar-btn").click();
    cy.get("a").contains("Articles").click();

    cy.url().should("include", "/admin/articles");
    cy.get("tbody").find("img").its("length").should("be.gt", 1);
    cy.get("h1").contains("Articles").should("be.visible");
  });
});
