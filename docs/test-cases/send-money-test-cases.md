# Send Money – Test Cases

| Field         | Content                      |
| ------------- | ---------------------------- |
| Project       | Cypress Real World App (RWA) |
| Feature       | Send Money                   |
| Author        | Vanessa Sousa                |
| Creation Date | 09/05/2026                   |
| Status        | In Progress                  |

---

## 1. Feature Overview

This page contains the test cases for the Send Money feature of the Cypress Real World App (RWA). This feature allows authenticated users to send money to other registered users. It depends on a successful user authentication and requires the sender to have sufficient account balance.

---

## 2. Test Cases

### TC-019: Send Money Successfully

| Field         | Content                                                                                                                                                                                                 |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Test Case ID  | TC-019                                                                                                                                                                                                  |
| Feature       | Send Money                                                                                                                                                                                              |
| Type          | Automated                                                                                                                                                                                               |
| Priority      | Critical                                                                                                                                                                                                |
| Preconditions | The RWA application is running in the local environment. The user is authenticated. The sender has sufficient account balance. At least one contact exists in the system. The database has been seeded. |

#### Scenario

```gherkin
Feature: Send Money

  Scenario: Send money successfully
    Given I am authenticated and on the RWA dashboard
    When I click the "New" button
    And I select a contact from the list
    And I enter a valid amount in the amount field
    And I enter a note in the add note field
    And I click the "Pay" button
    Then I should see the confirmation message "Paid $15.00 for Test123"
    And a notification "Transaction submitted" should be displayed
    And the sender's account balance should be decreased by the sent amount
    And the transaction should appear in the transaction history
```

#### Test Data

| Field           | Value                     |
| --------------- | ------------------------- |
| Sender Username | Dina20                    |
| Sender Password | s3cret                    |
| Recipient       | Any contact from the list |
| Amount          | 15                        |
| Note            | test123                   |

#### Expected Result

The payment is processed successfully. The confirmation message "Paid $15.00 for test123" is displayed. A "Transaction submitted" notification appears in the bottom left corner. The sender's account balance is decreased by $15.00. The transaction appears in the transaction history.

#### Execution Status

| Field          | Content                                                                                             |
| -------------- | --------------------------------------------------------------------------------------------------- |
| Status         | Passed                                                                                              |
| Executed By    | Vanessa Sousa                                                                                       |
| Execution Date | 01/06/2026                                                                                          |
| Evidence       | ![TC-019 Evidence](https://github.com/user-attachments/assets/3b9c8c5c-114c-4123-b514-88e4afbfdf4e) |

---

### TC-020: Send Money with Insufficient Funds

| Field         | Content                                                                                                                                                      |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Test Case ID  | TC-020                                                                                                                                                       |
| Feature       | Send Money                                                                                                                                                   |
| Type          | Automated                                                                                                                                                    |
| Priority      | Critical                                                                                                                                                     |
| Preconditions | The RWA application is running in the local environment. The user is authenticated. The database has been seeded. At least one contact exists in the system. |

#### Scenario

```gherkin
Feature: Send Money

  Scenario: Send money with insufficient funds
    Given I am authenticated and on the RWA dashboard
    When I click the "New" button
    And I select a contact from the list
    And I enter an amount greater than my account balance
    And I enter a note in the add note field
    And I click the "Pay" button
    Then I should see an error message indicating insufficient funds
    And the transaction should not be processed
    And the sender's account balance should remain unchanged
```

#### Test Data

| Field           | Value                     |
| --------------- | ------------------------- |
| Sender Username | Dina20                    |
| Sender Password | s3cret                    |
| Recipient       | Any contact from the list |
| Amount          | 2000                      |
| Note            | test insufficient funds   |

#### Expected Result

The system should display an error message indicating insufficient funds. The transaction should not be processed. The sender's account balance should remain unchanged.

#### Actual Result

⚠️ BUG: The system processes the transaction even when the amount exceeds the account balance. The confirmation message "Paid $2,000.00 for test insufficient funds" is displayed and a "Transaction submitted" notification appears. The transaction is recorded in the history.

Bug Reference: BUG-006 – Reported in Confluence and GitHub

#### Execution Status

| Field          | Content                                                                                             |
| -------------- | --------------------------------------------------------------------------------------------------- |
| Status         | Failed                                                                                              |
| Executed By    | Vanessa Sousa                                                                                       |
| Execution Date | 01/06/2026                                                                                          |
| Evidence       | ![TC-020 Evidence](https://github.com/user-attachments/assets/e433fba6-918b-46b5-8dbc-664c1e8136d2) |

---

### TC-021: Verify Account Balance is Updated After Sending Money

| Field         | Content                                                                                                                                                                                                 |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Test Case ID  | TC-021                                                                                                                                                                                                  |
| Feature       | Send Money                                                                                                                                                                                              |
| Type          | Manual                                                                                                                                                                                                  |
| Priority      | Critical                                                                                                                                                                                                |
| Preconditions | The RWA application is running in the local environment. The user is authenticated. The sender has sufficient account balance. At least one contact exists in the system. The database has been seeded. |

#### Scenario

```gherkin
Feature: Send Money

  Scenario: Verify account balance is updated after sending money
    Given I am authenticated and on the RWA dashboard
    And I note my current account balance
    When I click the "New" button
    And I select a contact from the list
    And I enter a valid amount in the amount field
    And I enter a note in the add note field
    And I click the "Pay" button
    Then I should see the confirmation message indicating the payment was successful
    And my account balance should be decreased by the sent amount
```

#### Test Data

| Field                  | Value                     |
| ---------------------- | ------------------------- |
| Sender Username        | Dina20                    |
| Sender Password        | s3cret                    |
| Recipient              | Any contact from the list |
| Initial Balance        | $1,568.80                 |
| Amount                 | $15.00                    |
| Note                   | balance test              |
| Expected Balance After | $1,553.80                 |

#### Expected Result

The payment is processed successfully. The account balance is decreased by the sent amount. The new account balance should be $1,553.80 after sending $15.00 from an initial balance of $1,568.80.

#### Execution Status

| Field          | Content       |
| -------------- | ------------- |
| Status         | Not Executed  |
| Executed By    | Vanessa Sousa |
| Execution Date | -             |
| Evidence       | -             |

---

### TC-022: Send Money with a Note

| Field         | Content                                                                                                                                                                                                 |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Test Case ID  | TC-022                                                                                                                                                                                                  |
| Feature       | Send Money                                                                                                                                                                                              |
| Type          | Manual                                                                                                                                                                                                  |
| Priority      | Medium                                                                                                                                                                                                  |
| Preconditions | The RWA application is running in the local environment. The user is authenticated. The sender has sufficient account balance. At least one contact exists in the system. The database has been seeded. |

#### Scenario

```gherkin
Feature: Send Money

  Scenario: Send money with a note
    Given I am authenticated and on the RWA dashboard
    When I click the "New" button
    And I select a contact from the list
    And I enter a valid amount in the amount field
    And I click the "Add Note" field
    And I enter a note in the add note field
    And I click the "Pay" button
    Then I should see the confirmation message indicating the payment was successful
    And the note should be displayed in the confirmation message
    And the transaction should appear in the transaction history with the note
```

#### Test Data

| Field           | Value                     |
| --------------- | ------------------------- |
| Sender Username | Dina20                    |
| Sender Password | s3cret                    |
| Recipient       | Any contact from the list |
| Amount          | $15.00                    |
| Note            | payment for lunch         |

#### Expected Result

The payment is processed successfully. The confirmation message "Paid $15.00 for payment for lunch" is displayed. The note "payment for lunch" appears in the transaction history associated with the transaction.

#### Execution Status

| Field          | Content       |
| -------------- | ------------- |
| Status         | Not Executed  |
| Executed By    | Vanessa Sousa |
| Execution Date | -             |
| Evidence       | -             |

---

### TC-023: Send Money without Selecting a Contact

| Field         | Content                                                                                                           |
| ------------- | ----------------------------------------------------------------------------------------------------------------- |
| Test Case ID  | TC-023                                                                                                            |
| Feature       | Send Money                                                                                                        |
| Type          | Manual                                                                                                            |
| Priority      | Medium                                                                                                            |
| Preconditions | The RWA application is running in the local environment. The user is authenticated. The database has been seeded. |

#### Scenario

```gherkin
Feature: Send Money

  Scenario: Send money without selecting a contact
    Given I am authenticated and on the RWA dashboard
    When I click the "New" button
    And I do not select any contact from the list
    Then I should not be able to proceed to the next step
    And no error message should be displayed
    And the system should remain on the contact selection screen
```

#### Test Data

No test data required. No contact is selected.

#### Expected Result

The system does not allow the user to proceed to the next step without selecting a contact. No error message is displayed. The user remains on the contact selection screen.

#### Execution Status

| Field          | Content       |
| -------------- | ------------- |
| Status         | Not Executed  |
| Executed By    | Vanessa Sousa |
| Execution Date | -             |
| Evidence       | -             |

---

### TC-024: Send Money without Entering an Amount

| Field         | Content                                                                                                                                                      |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Test Case ID  | TC-024                                                                                                                                                       |
| Feature       | Send Money                                                                                                                                                   |
| Type          | Manual                                                                                                                                                       |
| Priority      | High                                                                                                                                                         |
| Preconditions | The RWA application is running in the local environment. The user is authenticated. At least one contact exists in the system. The database has been seeded. |

#### Scenario

```gherkin
Feature: Send Money

  Scenario: Send money without entering an amount
    Given I am authenticated and on the RWA dashboard
    When I click the "New" button
    And I select a contact from the list
    And I leave the amount field blank
    And I click on the amount field and then move to another field
    Then the "Pay" and "Request" buttons should be disabled
    And I should see the error message "Please enter a valid amount"
```

#### Test Data

No test data required. The amount field is left blank.

#### Expected Result

The "Pay" and "Request" buttons remain disabled. The error message "Please enter a valid amount" is displayed below the amount field.

#### Execution Status

| Field          | Content       |
| -------------- | ------------- |
| Status         | Not Executed  |
| Executed By    | Vanessa Sousa |
| Execution Date | -             |
| Evidence       | -             |

---

### TC-025: Send Money without Adding a Note

| Field         | Content                                                                                                                                                                                                 |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Test Case ID  | TC-025                                                                                                                                                                                                  |
| Feature       | Send Money                                                                                                                                                                                              |
| Type          | Manual                                                                                                                                                                                                  |
| Priority      | Medium                                                                                                                                                                                                  |
| Preconditions | The RWA application is running in the local environment. The user is authenticated. The sender has sufficient account balance. At least one contact exists in the system. The database has been seeded. |

#### Scenario

```gherkin
Feature: Send Money

  Scenario: Send money without adding a note
    Given I am authenticated and on the RWA dashboard
    When I click the "New" button
    And I select a contact from the list
    And I enter a valid amount in the amount field
    And I click on the "Add Note" field and then move to another field
    And I leave the note field blank
    Then the "Pay" and "Request" buttons should be disabled
    And I should see the error message "Please enter a note"
```

#### Test Data

| Field           | Value                     |
| --------------- | ------------------------- |
| Sender Username | Dina20                    |
| Sender Password | s3cret                    |
| Recipient       | Any contact from the list |
| Amount          | $15.00                    |
| Note            | (left blank)              |

#### Expected Result

The "Pay" and "Request" buttons remain disabled. The error message "Please enter a note" is displayed below the note field.

#### Execution Status

| Field          | Content       |
| -------------- | ------------- |
| Status         | Not Executed  |
| Executed By    | Vanessa Sousa |
| Execution Date | -             |
| Evidence       | -             |

---

### TC-026: Send Money with a Negative Value

| Field         | Content                                                                                                                                                                                                 |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Test Case ID  | TC-026                                                                                                                                                                                                  |
| Feature       | Send Money                                                                                                                                                                                              |
| Type          | Manual                                                                                                                                                                                                  |
| Priority      | High                                                                                                                                                                                                    |
| Preconditions | The RWA application is running in the local environment. The user is authenticated. The sender has sufficient account balance. At least one contact exists in the system. The database has been seeded. |

#### Scenario

```gherkin
Feature: Send Money

  Scenario: Send money with a negative value
    Given I am authenticated and on the RWA dashboard
    When I click the "New" button
    And I select a contact from the list
    And I enter a negative value in the amount field
    And I enter a note in the add note field
    And I click the "Pay" button
    Then I should see an error message indicating that the amount must be a positive value
    And the transaction should not be processed
```

#### Test Data

| Field           | Value                     |
| --------------- | ------------------------- |
| Sender Username | Dina20                    |
| Sender Password | s3cret                    |
| Recipient       | Any contact from the list |
| Amount          | -5                        |
| Note            | negative value test       |

#### Expected Result

The system should display an error message indicating that the amount must be a positive value. The transaction should not be processed.

#### Actual Result

⚠️ BUG: The system accepts negative values and processes the transaction. The confirmation message "Paid -$5.00 for negative value test" is displayed and the transaction is recorded in the transaction history.

Bug Reference: BUG-006 – Reported in Jira.

#### Execution Status

| Field          | Content                |
| -------------- | ---------------------- |
| Status         | Failed                 |
| Executed By    | Vanessa Sousa          |
| Execution Date | 09/05/2026             |
| Evidence       | Pending Loom recording |

---

### TC-027: Send Money with Amount Exceeding Balance by One Unit

| Field         | Content                                                                                                                                                                                                     |
| ------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Test Case ID  | TC-027                                                                                                                                                                                                      |
| Feature       | Send Money                                                                                                                                                                                                  |
| Type          | Manual                                                                                                                                                                                                      |
| Priority      | Critical                                                                                                                                                                                                    |
| Preconditions | The RWA application is running in the local environment. The user is authenticated. The sender's current account balance is known. At least one contact exists in the system. The database has been seeded. |

#### Scenario

```gherkin
Feature: Send Money

  Scenario: Send money with amount exceeding balance by one unit
    Given I am authenticated and on the RWA dashboard
    And my current account balance is $1,568.80
    When I click the "New" button
    And I select a contact from the list
    And I enter an amount of $1,569.80 in the amount field
    And I enter a note in the add note field
    And I click the "Pay" button
    Then I should see an error message indicating insufficient funds
    And the transaction should not be processed
    And my account balance should remain unchanged
```

#### Test Data

| Field           | Value                     |
| --------------- | ------------------------- |
| Sender Username | Dina20                    |
| Sender Password | s3cret                    |
| Recipient       | Any contact from the list |
| Current Balance | $1,568.80                 |
| Amount          | $1,569.80                 |
| Note            | exceeding balance test    |

#### Expected Result

The system should display an error message indicating insufficient funds. The transaction should not be processed. The sender's account balance should remain at $1,568.80.

#### Actual Result

⚠️ BUG: The system processes the transaction even when the amount exceeds the account balance by one unit. The sender's account balance is set to zero instead of blocking the transaction.

Bug Reference: BUG-009 – Reported in Jira.

#### Execution Status

| Field          | Content                |
| -------------- | ---------------------- |
| Status         | Failed                 |
| Executed By    | Vanessa Sousa          |
| Execution Date | 09/05/2026             |
| Evidence       | Pending Loom recording |

---

### TC-028: Send Money with Letters in the Amount Field

| Field         | Content                                                                                                                                                      |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Test Case ID  | TC-028                                                                                                                                                       |
| Feature       | Send Money                                                                                                                                                   |
| Type          | Manual                                                                                                                                                       |
| Priority      | Medium                                                                                                                                                       |
| Preconditions | The RWA application is running in the local environment. The user is authenticated. At least one contact exists in the system. The database has been seeded. |

#### Scenario

```gherkin
Feature: Send Money

  Scenario: Send money with letters in the amount field
    Given I am authenticated and on the RWA dashboard
    When I click the "New" button
    And I select a contact from the list
    And I enter letters in the amount field
    And I enter a note in the add note field
    Then the amount field should remain blank
    And the "Pay" and "Request" buttons should be disabled
```

#### Test Data

| Field           | Value                     |
| --------------- | ------------------------- |
| Sender Username | Dina20                    |
| Sender Password | s3cret                    |
| Recipient       | Any contact from the list |
| Amount          | abcdef                    |
| Note            | letters test              |

#### Expected Result

The amount field does not accept letters and remains blank. The "Pay" and "Request" buttons remain disabled. The user is not able to submit the transaction.

#### Execution Status

| Field          | Content       |
| -------------- | ------------- |
| Status         | Not Executed  |
| Executed By    | Vanessa Sousa |
| Execution Date | -             |
| Evidence       | -             |

---

### TC-029: Send Money with Decimal Point Only in Amount Field

| Field         | Content                                                                                                                                                      |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Test Case ID  | TC-029                                                                                                                                                       |
| Feature       | Send Money                                                                                                                                                   |
| Type          | Manual                                                                                                                                                       |
| Priority      | High                                                                                                                                                         |
| Preconditions | The RWA application is running in the local environment. The user is authenticated. At least one contact exists in the system. The database has been seeded. |

#### Scenario

```gherkin
Feature: Send Money

  Scenario: Send money with decimal point only in amount field
    Given I am authenticated and on the RWA dashboard
    When I click the "New" button
    And I select a contact from the list
    And I enter only a decimal point "." in the amount field
    And I enter a note in the add note field
    And I click the "Pay" button
    Then I should see an error message indicating that the amount is invalid
    And the transaction should not be processed
```

#### Test Data

| Field           | Value                     |
| --------------- | ------------------------- |
| Sender Username | Dina20                    |
| Sender Password | s3cret                    |
| Recipient       | Any contact from the list |
| Amount          | .                         |
| Note            | decimal point test        |

#### Expected Result

The system should display an error message indicating that the amount is invalid. The transaction should not be processed.

#### Actual Result

⚠️ BUG: The system displays a technical error message: "amount must be a `number` type, but the final value was: `NaN` (cast from the value `"."`)." This exposes an internal validation error to the user instead of displaying a user-friendly error message.

Bug Reference: BUG-007 – Reported in Jira.

#### Execution Status

| Field          | Content                |
| -------------- | ---------------------- |
| Status         | Failed                 |
| Executed By    | Vanessa Sousa          |
| Execution Date | 09/05/2026             |
| Evidence       | Pending Loom recording |

---

### TC-030: Send Money with Invalid Decimal Value

| Field         | Content                                                                                                                                                                                                 |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Test Case ID  | TC-030                                                                                                                                                                                                  |
| Feature       | Send Money                                                                                                                                                                                              |
| Type          | Manual                                                                                                                                                                                                  |
| Priority      | High                                                                                                                                                                                                    |
| Preconditions | The RWA application is running in the local environment. The user is authenticated. The sender has sufficient account balance. At least one contact exists in the system. The database has been seeded. |

#### Scenario

```gherkin
Feature: Send Money

  Scenario: Send money with invalid decimal value
    Given I am authenticated and on the RWA dashboard
    When I click the "New" button
    And I select a contact from the list
    And I enter an invalid decimal value "0.664" in the amount field
    And I enter a note in the add note field
    And I click the "Pay" button
    Then I should see an error message indicating that the amount is invalid
    And the transaction should not be processed
```

#### Test Data

| Field           | Value                     |
| --------------- | ------------------------- |
| Sender Username | Dina20                    |
| Sender Password | s3cret                    |
| Recipient       | Any contact from the list |
| Amount          | 0.664                     |
| Note            | invalid decimal test      |

#### Expected Result

The system should display an error message indicating that the amount is invalid. The transaction should not be processed.

#### Actual Result

⚠️ BUG: The system accepts the invalid decimal value and processes the transaction. The amount is rounded down to $0.00 and the confirmation message "Paid $0.00 for invalid decimal test" is displayed. The transaction is recorded in the history with $0.00 amount.

Bug Reference: BUG-008 – Reported in Jira.

#### Execution Status

| Field          | Content                |
| -------------- | ---------------------- |
| Status         | Failed                 |
| Executed By    | Vanessa Sousa          |
| Execution Date | 09/05/2026             |
| Evidence       | Pending Loom recording |

---

### TC-031: Request Money from a Contact

| Field         | Content                                                                                                                                                      |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Test Case ID  | TC-031                                                                                                                                                       |
| Feature       | Send Money                                                                                                                                                   |
| Type          | Manual                                                                                                                                                       |
| Priority      | Medium                                                                                                                                                       |
| Preconditions | The RWA application is running in the local environment. The user is authenticated. At least one contact exists in the system. The database has been seeded. |

#### Scenario

```gherkin
Feature: Send Money

  Scenario: Request money from a contact
    Given I am authenticated and on the RWA dashboard
    When I click the "New" button
    And I select a contact from the list
    And I enter a valid amount in the amount field
    And I enter a note in the add note field
    And I click the "Request" button
    Then I should see the confirmation message "Requested $15.00 for request money test"
    And a notification "Transaction submitted" should be displayed
    And the request should appear in the transaction history
```

#### Test Data

| Field           | Value                     |
| --------------- | ------------------------- |
| Sender Username | Dina20                    |
| Sender Password | s3cret                    |
| Recipient       | Any contact from the list |
| Amount          | $15.00                    |
| Note            | request money test        |

#### Expected Result

The money request is submitted successfully. The confirmation message "Requested $15.00 for request money test" is displayed. A "Transaction submitted" notification appears in the bottom left corner. The request appears in the transaction history.

#### Execution Status

| Field          | Content       |
| -------------- | ------------- |
| Status         | Not Executed  |
| Executed By    | Vanessa Sousa |
| Execution Date | -             |
| Evidence       | -             |
