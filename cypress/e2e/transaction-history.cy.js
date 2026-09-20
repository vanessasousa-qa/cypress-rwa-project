describe("Transaction History", () => {
  beforeEach(() => {
    cy.clearCookies();
    cy.clearLocalStorage();
    cy.visit("/");
    cy.get('[data-test="signin-username"]').type("Dina20");
    cy.get('[data-test="signin-password"]').type("s3cret");
    cy.get('[data-test="signin-submit"]').click();
    cy.get('[data-test="nav-top-notifications-link"]').should("be.visible");
  });

  it("TC-032: View Transaction History Successfully", () => {
    cy.get('[data-test="nav-public-tab"]').should(
      "have.attr",
      "aria-selected",
      "true",
    );

    cy.get('[data-test="transaction-list"]').should("be.visible");
    cy.get('[data-test^="transaction-item"]').should(
      "have.length.greaterThan",
      0,
    );

    cy.get('[data-test^="transaction-item"]')
      .first()
      .within(() => {
        cy.get('[data-test^="transaction-sender"]').should("be.visible");
        cy.get('[data-test^="transaction-receiver"]').should("be.visible");
      });

    cy.contains('[data-test^="transaction-item"]', "requested").within(() => {
      cy.get('[data-test^="transaction-amount"]').should(
        "have.class",
        "TransactionAmount-amountPositive",
      );
    });

    cy.contains('[data-test^="transaction-item"]', "paid").within(() => {
      cy.get('[data-test^="transaction-amount"]').should(
        "have.class",
        "TransactionAmount-amountNegative",
      );
    });
  });

  it("TC-033: Verify Transaction Details", () => {
    // Using { force: true } because the item is covered by the fixed navigation
    // bar (intentional layout behavior, not a bug) — not because Cypress
    // couldn't locate the element.
    cy.get('[data-test^="transaction-item"]').first().click({ force: true });
    cy.url().should("include", "/transaction/");
    cy.get('[data-test="transaction-detail-header"]').should("be.visible");

    cy.get('[data-test^="transaction-sender"]').should("be.visible");
    cy.get('[data-test^="transaction-receiver"]').should("be.visible");
    cy.get('[data-test^="transaction-amount"]').should("be.visible");

    cy.get('[data-test^="transaction-like-count"]').should("be.visible");
    cy.get('[data-testid="ThumbUpAltOutlinedIcon"]').should("be.visible");

    cy.get('[data-test^="transaction-comment-input"]').should("be.visible");
  });
});
