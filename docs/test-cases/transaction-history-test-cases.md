# Transaction History – Test Cases

| Field | Content |
|---|---|
| Project | Cypress Real World App (RWA) |
| Feature | Transaction History |
| Author | Vanessa Sousa |
| Creation Date | 12/05/2026 |
| Status | In Progress |

---

## 1. Feature Overview

This page contains the test cases for the Transaction History feature of the Cypress Real World App (RWA). This feature allows authenticated users to view, filter and interact with financial transactions. It depends on a successful user authentication and requires at least one completed transaction to validate the history display.

---

## 2. Test Cases

### TC-032: View Transaction History Successfully

| Field | Content |
|---|---|
| Test Case ID | TC-032 |
| Feature | Transaction History |
| Type | Automated |
| Priority | Critical |
| Preconditions | The RWA application is running in the local environment. The user is authenticated. At least one completed transaction exists in the system. The database has been seeded. |

#### Scenario

```gherkin
Feature: Transaction History

  Scenario: View transaction history successfully
    Given I am authenticated and on the RWA dashboard
    When I navigate to the Transaction History page
    Then I should see the "Everyone" tab selected by default
    And I should see a list of public transactions
    And each transaction should display the sender, recipient, amount and note
    And payment transactions should display the amount in red
    And request transactions should display the amount in green
```

#### Test Data

No test data required. The transaction history is populated with seed data.

#### Expected Result

The Transaction History page is displayed with the "Everyone" tab selected by default. A list of public transactions is visible, each displaying the sender, recipient, amount and note. Payment transactions are displayed in red and request transactions are displayed in green.

#### Execution Status

| Field | Content |
|---|---|
| Status | Not Executed |
| Executed By | Vanessa Sousa |
| Execution Date | - |
| Evidence | - |

---

### TC-033: Verify Transaction Details

| Field | Content |
|---|---|
| Test Case ID | TC-033 |
| Feature | Transaction History |
| Type | Automated |
| Priority | Critical |
| Preconditions | The RWA application is running in the local environment. The user is authenticated. At least one completed transaction exists in the system. The database has been seeded. |

#### Scenario

```gherkin
Feature: Transaction History

  Scenario: Verify transaction details
    Given I am authenticated and on the Transaction History page
    When I click on a transaction from the list
    Then I should be redirected to the Transaction Detail page
    And I should see the sender and recipient avatars
    And I should see the sender name, transaction type and recipient name
    And I should see the transaction note
    And I should see the transaction amount
    And I should see the like count and like button
    And I should see the comment input field
    And I should see the comments section
```

#### Test Data

No test data required. The transaction details are populated with seed data.

#### Expected Result

The Transaction Detail page displays all correct information — sender and recipient avatars, names, transaction type, note, amount, like count, like button, comment input field and comments section.

#### Execution Status

| Field | Content |
|---|---|
| Status | Not Executed |
| Executed By | Vanessa Sousa |
| Execution Date | - |
| Evidence | - |

---

### TC-034: Verify "Everyone" Tab Displays All Public Transactions

| Field | Content |
|---|---|
| Test Case ID | TC-034 |
| Feature | Transaction History |
| Type | Manual |
| Priority | Critical |
| Preconditions | The RWA application is running in the local environment. The user is authenticated. The database has been seeded. |

#### Scenario

```gherkin
Feature: Transaction History

  Scenario: Verify "Everyone" tab displays all public transactions
    Given I am authenticated and on the Transaction History page
    When I click on the "Everyone" tab
    Then I should see a list of public transactions from all users
    And my own transactions should not be displayed in this tab
```

#### Test Data

No test data required. The transaction feed is populated with seed data.

#### Expected Result

The "Everyone" tab displays all public transactions from all users in the system. The authenticated user's own transactions are not displayed in this tab.

#### Execution Status

| Field | Content |
|---|---|
| Status | Not Executed |
| Executed By | Vanessa Sousa |
| Execution Date | - |
| Evidence | - |

---

### TC-035: Verify "Friends" Tab Displays Only Friends' Transactions

| Field | Content |
|---|---|
| Test Case ID | TC-035 |
| Feature | Transaction History |
| Type | Manual |
| Priority | High |
| Preconditions | The RWA application is running in the local environment. The user is authenticated. The user has at least one contact. The database has been seeded. |

#### Scenario

```gherkin
Feature: Transaction History

  Scenario: Verify "Friends" tab displays only friends' transactions
    Given I am authenticated and on the Transaction History page
    When I click on the "Friends" tab
    Then I should see only transactions involving my contacts
    And transactions from non-contacts should not be displayed
```

#### Test Data

No test data required. The transaction feed is populated with seed data.

#### Expected Result

The "Friends" tab displays only transactions involving the authenticated user's contacts. Transactions from users who are not contacts are not displayed.

#### Execution Status

| Field | Content |
|---|---|
| Status | Not Executed |
| Executed By | Vanessa Sousa |
| Execution Date | - |
| Evidence | - |

---

### TC-036: Verify "Mine" Tab Displays Only Own Transactions

| Field | Content |
|---|---|
| Test Case ID | TC-036 |
| Feature | Transaction History |
| Type | Manual |
| Priority | Critical |
| Preconditions | The RWA application is running in the local environment. The user is authenticated. At least one transaction exists for the authenticated user. The database has been seeded. |

#### Scenario

```gherkin
Feature: Transaction History

  Scenario: Verify "Mine" tab displays only own transactions
    Given I am authenticated and on the Transaction History page
    When I click on the "Mine" tab
    Then I should see only my own transactions
    And the list should include transactions I sent, received and requested
    And transactions from other users should not be displayed
```

#### Test Data

No test data required. The transaction feed is populated with seed data.

#### Expected Result

The "Mine" tab displays only the authenticated user's transactions — sent, received and requested. Transactions from other users are not displayed.

#### Execution Status

| Field | Content |
|---|---|
| Status | Not Executed |
| Executed By | Vanessa Sousa |
| Execution Date | - |
| Evidence | - |

---

### TC-037: Verify Transaction Detail Page Displays Correct Information

| Field | Content |
|---|---|
| Test Case ID | TC-037 |
| Feature | Transaction History |
| Type | Manual |
| Priority | Critical |
| Preconditions | The RWA application is running in the local environment. The user is authenticated. At least one completed transaction exists in the system. The database has been seeded. |

#### Scenario

```gherkin
Feature: Transaction History

  Scenario: Verify transaction detail page displays correct information
    Given I am authenticated and on the Transaction History page
    When I click on a transaction from the list
    Then I should be redirected to the Transaction Detail page
    And I should see the sender and recipient avatars
    And I should see the sender name, transaction type and recipient name
    And I should see the transaction note
    And I should see the transaction amount
    And I should see the like count and like button
    And I should see the comment input field
    And I should see the comments section
```

#### Test Data

No test data required. The transaction details are populated with seed data.

#### Expected Result

The Transaction Detail page displays all correct information — sender and recipient avatars, names, transaction type, note, amount, like count, like button, comment input field and comments section.

#### Execution Status

| Field | Content |
|---|---|
| Status | Not Executed |
| Executed By | Vanessa Sousa |
| Execution Date | - |
| Evidence | - |

---

### TC-038: Verify Like Button Increments Like Count

| Field | Content |
|---|---|
| Test Case ID | TC-038 |
| Feature | Transaction History |
| Type | Manual |
| Priority | Medium |
| Preconditions | The RWA application is running in the local environment. The user is authenticated. At least one completed transaction exists in the system. The database has been seeded. |

#### Scenario

```gherkin
Feature: Transaction History

  Scenario: Verify like button increments like count
    Given I am authenticated and on the Transaction Detail page
    And I note the current like count
    When I click the like button
    Then the like count should increase by 1 immediately
    And the like button should reflect the updated state
```

#### Test Data

No test data required. The transaction feed is populated with seed data.

#### Expected Result

After clicking the like button, the like count increases by 1 immediately without requiring a page reload. The like button reflects the updated state.

#### Execution Status

| Field | Content |
|---|---|
| Status | Not Executed |
| Executed By | Vanessa Sousa |
| Execution Date | - |
| Evidence | - |

---

### TC-039: Verify Comment is Published After Submission

| Field | Content |
|---|---|
| Test Case ID | TC-039 |
| Feature | Transaction History |
| Type | Manual |
| Priority | Medium |
| Preconditions | The RWA application is running in the local environment. The user is authenticated. At least one completed transaction exists in the system. The database has been seeded. |

#### Scenario

```gherkin
Feature: Transaction History

  Scenario: Verify comment is published after submission
    Given I am authenticated and on the Transaction Detail page
    When I click on the comment input field
    And I type a comment
    And I press "Enter" to submit
    Then the comment should be published immediately
    And the comment should appear in the comments section
```

#### Test Data

| Field | Value |
|---|---|
| Comment | This is a test comment |

#### Expected Result

After pressing Enter, the comment is published immediately and appears in the comments section without requiring a page reload.

#### Execution Status

| Field | Content |
|---|---|
| Status | Not Executed |
| Executed By | Vanessa Sousa |
| Execution Date | - |
| Evidence | - |

---

### TC-040: Verify Like and Comment Counts Are Updated in Transaction Feed

| Field | Content |
|---|---|
| Test Case ID | TC-040 |
| Feature | Transaction History |
| Type | Manual |
| Priority | Medium |
| Preconditions | The RWA application is running in the local environment. The user is authenticated. At least one completed transaction exists in the system. The database has been seeded. |

#### Scenario

```gherkin
Feature: Transaction History

  Scenario: Verify like and comment counts are updated in transaction feed
    Given I am authenticated and on the Transaction History page
    And I note the current like and comment counts of a transaction
    When I open the transaction detail page
    And I click the like button
    And I submit a comment
    And I navigate back to the Transaction History page
    Then the like count of the transaction should be updated in the feed
    And the comment count of the transaction should be updated in the feed
```

#### Test Data

| Field | Value |
|---|---|
| Comment | feed update test |

#### Expected Result

After liking and commenting on a transaction, the updated like and comment counts are reflected in the Transaction History feed without requiring a page reload.

#### Execution Status

| Field | Content |
|---|---|
| Status | Not Executed |
| Executed By | Vanessa Sousa |
| Execution Date | - |
| Evidence | - |

---

### TC-041: Filter Transactions by Date

| Field | Content |
|---|---|
| Test Case ID | TC-041 |
| Feature | Transaction History |
| Type | Manual |
| Priority | High |
| Preconditions | The RWA application is running in the local environment. The user is authenticated. At least one completed transaction exists in the system. The database has been seeded. |

#### Scenario

```gherkin
Feature: Transaction History

  Scenario: Filter transactions by date
    Given I am authenticated and on the Transaction History page
    When I click on the "Date" filter
    And I select a date range that includes existing transactions
    Then I should see only transactions within the selected date range
    And transactions outside the selected date range should not be displayed
```

#### Test Data

| Field | Value |
|---|---|
| Date Filter | Date range containing existing transactions from seed data |

#### Expected Result

Only transactions within the selected date range are displayed. Transactions outside the selected date range are not visible in the feed.

#### Execution Status

| Field | Content |
|---|---|
| Status | Not Executed |
| Executed By | Vanessa Sousa |
| Execution Date | - |
| Evidence | - |

---

### TC-042: Filter Transactions by Amount Range

| Field | Content |
|---|---|
| Test Case ID | TC-042 |
| Feature | Transaction History |
| Type | Manual |
| Priority | High |
| Preconditions | The RWA application is running in the local environment. The user is authenticated. At least one completed transaction exists in the system. The database has been seeded. |

#### Scenario

```gherkin
Feature: Transaction History

  Scenario: Filter transactions by amount range
    Given I am authenticated and on the Transaction History page
    When I click on the "Amount" filter
    And I select a specific amount range
    Then I should see only transactions within the selected amount range
    And transactions outside the selected amount range should not be displayed
```

#### Test Data

| Field | Value |
|---|---|
| Amount Filter | $0 - $100 |

#### Expected Result

Only transactions within the selected amount range of $0 - $100 are displayed. Transactions with amounts outside this range are not visible in the feed.

#### Execution Status

| Field | Content |
|---|---|
| Status | Not Executed |
| Executed By | Vanessa Sousa |
| Execution Date | - |
| Evidence | - |

---

### TC-043: Clear Amount Filter and Verify All Transactions Are Displayed

| Field | Content |
|---|---|
| Test Case ID | TC-043 |
| Feature | Transaction History |
| Type | Manual |
| Priority | Medium |
| Preconditions | The RWA application is running in the local environment. The user is authenticated. The amount filter is currently applied. The database has been seeded. |

#### Scenario

```gherkin
Feature: Transaction History

  Scenario: Clear amount filter and verify all transactions are displayed
    Given I am authenticated and on the Transaction History page
    And the amount filter is set to "$0 - $100"
    When I clear the amount filter
    Then all transactions should be displayed again
    And the amount filter should reset to its default value "$0 - $1,000"
```

#### Test Data

| Field | Value |
|---|---|
| Initial Amount Filter | $0 - $100 |
| Expected Filter After Reset | $0 - $1,000 |

#### Expected Result

After clearing the amount filter, all transactions are displayed again. The amount filter resets to its default value of $0 - $1,000.

#### Execution Status

| Field | Content |
|---|---|
| Status | Not Executed |
| Executed By | Vanessa Sousa |
| Execution Date | - |
| Evidence | - |