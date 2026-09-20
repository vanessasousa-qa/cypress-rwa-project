describe("Send Money", () => {
  beforeEach(() => {
    cy.clearCookies();
    cy.clearLocalStorage();
    cy.visit("/");
  });

  it("TC-019 — Send Money Successfully", () => {
    cy.get('[data-test="signin-username"]').type("Dina20");
    cy.get('[data-test="signin-password"]').type("s3cret");
    cy.get('[data-test="signin-submit"]').click();
    cy.get('[data-test="nav-top-new-transaction"]').click();
    cy.get('[data-test^="user-list-item-"]').first().click();
    cy.get('[data-test="transaction-create-amount-input"]').type("15");
    cy.get('[data-test="transaction-create-description-input"]').type(
      "Test123",
    );
    cy.get('[data-test="transaction-create-submit-payment"]').click();
    cy.get('[data-test="main"]').should("contain", "Paid $15.00 for Test123");
    cy.get('[data-test="alert-bar-success"]').should("be.visible");
  });

  it("TC-020 — Send Money with Insufficient Funds", () => {
    cy.get('[data-test="signin-username"]').type("Dina20");
    cy.get('[data-test="signin-password"]').type("s3cret");
    cy.get('[data-test="signin-submit"]').click();
    cy.get('[data-test="nav-top-new-transaction"]').click();
    cy.get('[data-test^="user-list-item-"]').first().click();
    cy.get('[data-test="transaction-create-amount-input"]').type("2000");
    cy.get('[data-test="transaction-create-description-input"]').type(
      "test insufficient funds",
    );
    cy.get('[data-test="transaction-create-submit-payment"]').click();
    cy.get('[data-test="alert-bar-error"]').should("be.visible");
    // NOTE: This test is expected to FAIL until BUG-006 is resolved.
    // The app returns 200 OK and creates the transaction even when the amount
    // exceeds the account balance — no validation is performed and no
    // "alert-bar-error" element is rendered. The assertion below correctly
    // detects this missing error handling. See BUG-006 in docs/bug-reports/
    // for full details.
  });
});
