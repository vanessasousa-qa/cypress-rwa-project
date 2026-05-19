# Test Plan – Cypress Real World App (RWA)

| Field | Content |
|---|---|
| Project | Cypress Real World App (RWA) |
| Document Version | 1.0 |
| Author | Vanessa Sousa |
| Creation Date | 01/05/2026 |
| Status | In Progress |

---

## 1. Overview

This test plan covers the functional testing of the Cypress Real World App (RWA), a payment application that simulates real-world financial transactions. The goal is to validate the core features of the application, ensuring they work correctly and meet the expected acceptance criteria.

---

## 2. Scope

### 2.1 In Scope

The following features will be covered in this test plan:

- User Authentication (Login and Registration)
- Send Money
- Transaction History

### 2.2 Out of Scope

The following areas will not be covered in this test plan:

- API Testing
- Database Testing
- Performance Testing
- Security Testing

---

## 3. Test Strategy

The following testing types will be applied in this project:

- **Functional Testing:** Validate that each feature behaves according to the expected requirements.
- **End-to-End Testing (E2E):** Simulate real user interactions using Cypress.
- **Negative Testing:** Validate system behaviour when invalid or unexpected data is provided.

---

## 4. Test Environment

- **Application:** Cypress Real World App (RWA)
- **Repository:** https://github.com/cypress-io/cypress-realworld-app
- **Environment:** Local
- **Browser:** Chrome 147.0.7727.138
- **Automation Tool:** Cypress
- **Programming Language:** JavaScript

---

## 5. Test Execution

- Automated test cases will be executed using Cypress.
- Manual test cases will be executed directly in the browser and results will be recorded in this documentation.
- All test evidence (screenshots, recordings and results) will be documented in the Test Execution Report.
- Manual test execution recordings will be captured using Loom and attached as evidence.

---

## 6. Test Dependencies

The following dependency chain was identified for the features covered in this plan:

1. **User Authentication** – Entry point of the application. All other features depend on a successful login.
2. **Send Money** – Requires an authenticated user with sufficient account balance.
3. **Transaction History** – Requires at least one completed transaction to validate the history display.

---

## 7. Entry and Exit Criteria

### 7.1 Entry Criteria

Testing will begin when the following conditions are met:

- The RWA application is running successfully in the local environment.
- Seed data is available and accessible.
- Test cases are documented and reviewed.
- Cypress is installed and configured in the project.

### 7.2 Exit Criteria

Testing will be considered complete when the following conditions are met:

- All planned test cases have been executed.
- All critical and high severity bugs have been reported in Jira.
- Test Execution Report has been completed with results and evidence.

---

## 8. Bug Management

- All defects identified during test execution will be reported in Jira.
- Each bug report will include: summary, steps to reproduce, expected result, actual result, severity, and evidence.
- Bugs will be classified by severity:
  - **Critical:** Blocks the use of the application.
  - **High:** Major feature is not working correctly.
  - **Medium:** Feature works but with unexpected behaviour.
  - **Low:** Minor issues such as typos or UI inconsistencies.

---

## 9. Risks and Assumptions

### 9.1 Risks

- Seed data may not always reflect real-world scenarios.
- Local environment differences may affect test results.
- Flaky tests may occur due to timing issues in E2E automation.

### 9.2 Assumptions

- The RWA application is stable and available in the local environment during test execution.
- Seed data will be reset before each test execution cycle.
- All automated tests will be executed in Chrome browser.