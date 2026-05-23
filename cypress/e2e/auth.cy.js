describe("User Authentication", () => {
  beforeEach(() => {
    cy.clearCookies();
    cy.clearLocalStorage();
    cy.visit("/");
  });

  it("TC-001: Successful Login with Valid Credentials", () => {
    cy.get('[data-test="signin-username"]').type("Dina20");
    cy.get('[data-test="signin-password"]').type("s3cret");
    cy.get('[data-test="signin-submit"]').click();
    cy.get('[data-test="nav-top-notifications-link"]').should("be.visible");
  });

  it("TC-002: Login with Invalid Credentials", () => {
    cy.get('[data-test="signin-username"]').type("invalid_user");
    cy.get('[data-test="signin-password"]').type("invalid_password");
    cy.get('[data-test="signin-submit"]').click();
    cy.get('[data-test="signin-error"]').should(
      "contain",
      "Username or password is invalid",
    );
  });
});
