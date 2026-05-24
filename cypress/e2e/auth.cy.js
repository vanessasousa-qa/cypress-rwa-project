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

  it.only("TC-003: Successful User Registration", () => {
    cy.get('[data-test="signup"]').click();
    cy.get('[data-test="signup-first-name"]').type("Test");
    cy.get('[data-test="signup-last-name"]').type("User");
    cy.get('[data-test="signup-username"]').type("testuser_02");
    cy.get('[data-test="signup-password"]').type("Test@123");
    cy.get('[data-test="signup-confirmPassword"]').type("Test@123");
    cy.get('[data-test="signup-submit"]').click();
    cy.get('[data-test="signin-username"]').type("testuser_02");
    cy.get('[data-test="signin-password"]').type("Test@123");
    cy.get('[data-test="signin-submit"]').click();
    cy.get('[data-test="user-onboarding-dialog-title"]').should(
      "contain",
      "Get Started with Real World App",
    );
  });
});
