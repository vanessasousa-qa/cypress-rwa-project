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

  it.only("TC-020 — Send Money with Insufficient Funds", () => {
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
  });
});
