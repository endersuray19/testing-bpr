describe("test on articles", () => {
  beforeEach("login first", () => {
    cy.login("admin@gmail.com");
  });
  it("Create an article", () => {
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
  it("Update an article", () => {
    cy.url().should("include", "/admin");
    cy.get(".fi-sidebar-item").contains("Articles").click();
    cy.url().should("include", "/admin/articles");
    cy.get(
      ":nth-child(2) > .fi-ta-actions-cell > .whitespace-nowrap > .fi-ta-actions > .fi-color-primary"
    ).click();
    cy.get("h1").contains("Edit Article").should("be.visible");

    cy.get("input[placeholder='Title']")
      .clear()
      .type("Tentang akuntansi syariah");
    cy.get("textarea[placeholder='Meta description']")
      .clear()
      .type(
        "Akuntansi syariah adalah sistem pencatatan keuangan berdasarkan prinsip Islam yang menghindari riba dan gharar, serta menekankan transparansi dan keadilan dalam bisnis."
      );
    cy.get("#data\\.content").clear()
      .type(`Akuntansi syariah adalah sistem akuntansi yang berlandaskan prinsip-prinsip Islam dalam pengelolaan keuangan. Dalam akuntansi syariah, setiap transaksi keuangan harus sesuai dengan aturan syariah, yang didasarkan pada Al-Qur’an dan Hadis. Tujuan utama dari akuntansi syariah bukan hanya untuk mencatat dan melaporkan transaksi keuangan, tetapi juga untuk memastikan bahwa setiap aktivitas bisnis berjalan sesuai dengan nilai-nilai Islam, seperti keadilan, transparansi, dan keberkahan.
    Salah satu prinsip utama dalam akuntansi syariah adalah larangan terhadap riba (bunga). Dalam Islam, riba dianggap sebagai praktik yang merugikan dan tidak adil. Oleh karena itu, lembaga keuangan syariah tidak boleh mengambil keuntungan dari bunga, melainkan menerapkan sistem bagi hasil (mudharabah) atau kerjasama (musyarakah) dalam transaksi keuangan. Selain itu, transaksi yang mengandung unsur gharar (ketidakpastian) dan maysir (judi) juga dilarang dalam akuntansi syariah.
    Dalam praktiknya, akuntansi syariah memiliki standar tersendiri yang berbeda dengan akuntansi konvensional. Standar ini dikembangkan oleh lembaga seperti Accounting and Auditing Organization for Islamic Financial Institutions (AAOIFI) dan Dewan Standar Akuntansi Syariah (DSAS) di berbagai negara. Laporan keuangan dalam akuntansi syariah tidak hanya berfokus pada keuntungan material, tetapi juga mencerminkan tanggung jawab sosial perusahaan terhadap masyarakat dan lingkungan.
    Selain itu, akuntansi syariah juga menekankan konsep zakat dalam pelaporan keuangan. Zakat adalah kewajiban bagi umat Muslim yang memiliki harta melebihi batas tertentu (nisab) untuk memberikan sebagian dari kekayaannya kepada golongan yang berhak menerimanya. Oleh karena itu, perusahaan berbasis syariah wajib menyusun laporan zakat sebagai bagian dari laporan keuangannya.
    Dengan semakin berkembangnya industri keuangan syariah di seluruh dunia, akuntansi syariah menjadi semakin penting dalam menjaga transparansi dan kepatuhan terhadap hukum Islam. Sistem ini tidak hanya diterapkan di bank syariah, tetapi juga di berbagai sektor bisnis seperti asuransi syariah (takaful), pasar modal syariah, dan perusahaan yang beroperasi sesuai prinsip Islam.
    Dengan pendekatan yang berorientasi pada keadilan dan kesejahteraan sosial, akuntansi syariah menjadi alternatif yang berkelanjutan bagi sistem keuangan global. Keberadaannya tidak hanya berfungsi sebagai alat pencatatan keuangan, tetapi juga sebagai sarana untuk menciptakan ekonomi yang lebih adil dan beretika sesuai dengan nilai-nilai Islam.`);
    cy.get(".filepond--action-remove-item").click();
    cy.wait(2000);
    cy.get("input[type='file']").attachFile("54-1628768812.jpg", {
      force: true,
    });

    cy.wait(2000);
    cy.get(":nth-child(2) > .fi-badge-delete-button").click();
    cy.wait(1000);
    cy.get(":nth-child(2) > .fi-badge-delete-button").click();

    cy.get("#data\\.keywords").eq(1).type("Akunting");
    cy.get("input[placeholder='Title']").click();
    cy.get("#data\\.keywords").eq(1).type("Syariah");
    cy.get("input[placeholder='Title']").click();

    cy.get("button").contains("Save changes").should("be.visible").click();
    cy.wait(2000);

    cy.get(".fi-no-notification-title").should("be.visible");
    cy.get(".fi-topbar-open-sidebar-btn").click();
    cy.get("a").contains("Articles").click();

    cy.url().should("include", "/admin/articles");
    cy.contains("Tentang akuntansi syariah").should("be.visible");
    cy.get("h1").contains("Articles").should("be.visible");
  });
  it("Delete an article", () => {
    cy.wait(2000);
    cy.get("li").contains("Articles").should("be.visible").click();
    cy.url().should("include", "/admin/articles");
    cy.contains("Articles").should("be.visible");
    cy.contains("Tentang akuntansi syariah").should("be.visible");
    cy.get(
      ":nth-child(2) > .fi-ta-actions-cell > .whitespace-nowrap > .fi-ta-actions > .fi-color-danger > .font-semibold"
    ).click();
    cy.contains("Are you sure you would like to do this?").should("be.visible");
    cy.get("button").contains("Confirm").should("be.visible").click();
    cy.get(".fi-no-notification-title")
      .contains("Deleted")
      .should("be.visible");
    cy.get("h1").contains("Articles").should("be.visible");
    cy.url().should("include", "/admin/articles");
  });
});
