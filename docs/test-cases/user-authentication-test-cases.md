# User Authentication – Test Cases

| Field         | Content                      |
| ------------- | ---------------------------- |
| Project       | Cypress Real World App (RWA) |
| Feature       | User Authentication          |
| Author        | Vanessa Sousa                |
| Creation Date | 01/05/2026                   |
| Status        | In Progress                  |

---

## 1. Feature Overview

This page contains the test cases for the User Authentication feature of the Cypress Real World App (RWA). This feature is the entry point of the application and covers the Login and Registration flows. All other features depend on a successful authentication.

---

## 2. Test Cases

### TC-001: Successful Login with Valid Credentials

| Field         | Content                                                                                                                                                                    |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Test Case ID  | TC-001                                                                                                                                                                     |
| Feature       | User Authentication                                                                                                                                                        |
| Type          | Automated                                                                                                                                                                  |
| Priority      | Critical                                                                                                                                                                   |
| Preconditions | The RWA application is running in the local environment. A registered user exists in the seed data. No active session exists in the browser. The database has been seeded. |

#### Scenario

```gherkin
Feature: User Authentication

  Scenario: Successful login with valid credentials
    Given I am on the RWA login page
    When I enter a valid username
    And I enter a valid password
    And I click the "Sign In" button
    Then I should be redirected to the dashboard
    And I should see my account information displayed
```

#### Test Data

| Field    | Value  |
| -------- | ------ |
| Username | Dina20 |
| Password | s3cret |

#### Expected Result

The user is successfully authenticated and redirected to the dashboard. The account information is displayed correctly.

#### Execution Status

| Field          | Content                                                                                             |
| -------------- | --------------------------------------------------------------------------------------------------- |
| Status         | Executed                                                                                            |
| Executed By    | Vanessa Sousa                                                                                       |
| Execution Date | 23/05/2026                                                                                          |
| Evidence       | ![TC-001 Evidence](https://github.com/user-attachments/assets/28c0e983-5e16-4830-aa6a-fdc77d93f0e3) |

---

### TC-002: Login with Invalid Credentials

| Field         | Content                                                                                           |
| ------------- | ------------------------------------------------------------------------------------------------- |
| Test Case ID  | TC-002                                                                                            |
| Feature       | User Authentication                                                                               |
| Type          | Automated                                                                                         |
| Priority      | Critical                                                                                          |
| Preconditions | The RWA application is running in the local environment. No active session exists in the browser. |

#### Scenario

```gherkin
Feature: User Authentication

  Scenario: Login with invalid credentials
    Given I am on the RWA login page
    When I enter an invalid username
    And I enter an invalid password
    And I click the "Sign In" button
    Then I should remain on the login page
    And I should see an error message indicating invalid credentials
```

#### Test Data

| Field    | Value            |
| -------- | ---------------- |
| Username | invalid_user     |
| Password | invalid_password |

#### Expected Result

The user remains on the login page. An error message is displayed indicating that the provided credentials are invalid.

#### Execution Status

| Field          | Content                                                                                             |
| -------------- | --------------------------------------------------------------------------------------------------- |
| Status         | Executed                                                                                            |
| Executed By    | Vanessa Sousa                                                                                       |
| Execution Date | 23/05/2026                                                                                          |
| Evidence       | ![TC-002 Evidence](https://github.com/user-attachments/assets/58687933-c693-4b95-9773-c5690b9ed2a4) |

---

### TC-003: Successful User Registration

| Field         | Content                                                                                                                                                                                        |
| ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Test Case ID  | TC-003                                                                                                                                                                                         |
| Feature       | User Authentication                                                                                                                                                                            |
| Type          | Automated                                                                                                                                                                                      |
| Priority      | Critical                                                                                                                                                                                       |
| Preconditions | The RWA application is running in the local environment. No active session exists in the browser. The database has been seeded. The username testuser_01 does not already exist in the system. |

#### Scenario

```gherkin
Feature: User Authentication

  Scenario: Successful user registration
    Given I am on the RWA login page
    When I click the "Sign Up" link
    And I enter a valid first name
    And I enter a valid last name
    And I enter a valid username
    And I enter a valid password
    And I confirm the password
    And I click the "Sign Up" button
    Then I should be redirected to the login page
    And I should be able to login with the new credentials
```

#### Test Data

| Field            | Value       |
| ---------------- | ----------- |
| First Name       | Test        |
| Last Name        | User        |
| Username         | testuser_01 |
| Password         | Test@1234   |
| Confirm Password | Test@1234   |

#### Expected Result

The user is successfully registered. The system redirects the user to the login page where they can authenticate with the new credentials.

#### Execution Status

| Field          | Content       |
| -------------- | ------------- |
| Status         | Not Executed  |
| Executed By    | Vanessa Sousa |
| Execution Date | -             |
| Evidence       | -             |

---

### TC-004: Registration with Incomplete Information

| Field         | Content                                                                                           |
| ------------- | ------------------------------------------------------------------------------------------------- |
| Test Case ID  | TC-004                                                                                            |
| Feature       | User Authentication                                                                               |
| Type          | Automated                                                                                         |
| Priority      | High                                                                                              |
| Preconditions | The RWA application is running in the local environment. No active session exists in the browser. |

#### Scenario

```gherkin
Feature: User Authentication

  Scenario: Registration with incomplete information
    Given I am on the RWA login page
    When I click the "Sign Up" link
    And I enter a valid first name
    And I enter a valid last name
    And I leave the username field blank
    And I enter a valid password
    And I confirm the password
    And I click the "Sign Up" button
    Then the "Sign Up" button should be disabled
    And I should see the error message "Username is required"
```

#### Test Data

| Field            | Value        |
| ---------------- | ------------ |
| First Name       | Test         |
| Last Name        | User         |
| Username         | (left blank) |
| Password         | Test@1234    |
| Confirm Password | Test@1234    |

#### Expected Result

The "Sign Up" button remains disabled. The error message "Username is required" is displayed below the username field.

#### Execution Status

| Field          | Content       |
| -------------- | ------------- |
| Status         | Not Executed  |
| Executed By    | Vanessa Sousa |
| Execution Date | -             |
| Evidence       | -             |

---

### TC-005: Login with Empty Username Field

| Field         | Content                                                                                           |
| ------------- | ------------------------------------------------------------------------------------------------- |
| Test Case ID  | TC-005                                                                                            |
| Feature       | User Authentication                                                                               |
| Type          | Manual                                                                                            |
| Priority      | High                                                                                              |
| Preconditions | The RWA application is running in the local environment. No active session exists in the browser. |

#### Scenario

```gherkin
Feature: User Authentication

  Scenario: Login with empty username field
    Given I am on the RWA login page
    When I leave the username field blank
    And I enter a valid password
    Then the "Sign In" button should be disabled
    And I should see the error message "Username is required"
```

#### Test Data

| Field    | Value        |
| -------- | ------------ |
| Username | (left blank) |
| Password | s3cret       |

#### Expected Result

The "Sign In" button remains disabled. The error message "Username is required" is displayed below the username field.

#### Execution Status

| Field          | Content       |
| -------------- | ------------- |
| Status         | Not Executed  |
| Executed By    | Vanessa Sousa |
| Execution Date | -             |
| Evidence       | -             |

---

### TC-006: Login with Empty Password Field

| Field         | Content                                                                                           |
| ------------- | ------------------------------------------------------------------------------------------------- |
| Test Case ID  | TC-006                                                                                            |
| Feature       | User Authentication                                                                               |
| Type          | Manual                                                                                            |
| Priority      | High                                                                                              |
| Preconditions | The RWA application is running in the local environment. No active session exists in the browser. |

#### Scenario

```gherkin
Feature: User Authentication

  Scenario: Login with empty password field
    Given I am on the RWA login page
    When I enter a valid username
    And I leave the password field blank
    Then the "Sign In" button should be disabled
    And I should not be able to submit the login form
```

#### Test Data

| Field    | Value        |
| -------- | ------------ |
| Username | Dina20       |
| Password | (left blank) |

#### Expected Result

The "Sign In" button remains disabled. The user is not able to submit the login form.

#### Execution Status

| Field          | Content       |
| -------------- | ------------- |
| Status         | Not Executed  |
| Executed By    | Vanessa Sousa |
| Execution Date | -             |
| Evidence       | -             |

---

### TC-007: Login with Both Fields Empty

| Field         | Content                                                                                           |
| ------------- | ------------------------------------------------------------------------------------------------- |
| Test Case ID  | TC-007                                                                                            |
| Feature       | User Authentication                                                                               |
| Type          | Manual                                                                                            |
| Priority      | High                                                                                              |
| Preconditions | The RWA application is running in the local environment. No active session exists in the browser. |

#### Scenario

```gherkin
Feature: User Authentication

  Scenario: Login with both fields empty
    Given I am on the RWA login page
    When I leave the username field blank
    And I leave the password field blank
    And I click the "Sign In" button
    Then I should see the error message "Username is required"
    And the "Sign In" button should become disabled
```

#### Test Data

No test data required. All fields are left blank.

#### Expected Result

The error message "Username is required" is displayed below the username field. The "Sign In" button becomes disabled after the submission attempt.

#### Execution Status

| Field          | Content       |
| -------------- | ------------- |
| Status         | Not Executed  |
| Executed By    | Vanessa Sousa |
| Execution Date | -             |
| Evidence       | -             |

---

### TC-008: Login with Whitespace in Username Field

| Field         | Content                                                                                           |
| ------------- | ------------------------------------------------------------------------------------------------- |
| Test Case ID  | TC-008                                                                                            |
| Feature       | User Authentication                                                                               |
| Type          | Manual                                                                                            |
| Priority      | Medium                                                                                            |
| Preconditions | The RWA application is running in the local environment. No active session exists in the browser. |

#### Scenario

```gherkin
Feature: User Authentication

  Scenario: Login with whitespace in username field
    Given I am on the RWA login page
    When I enter only whitespace in the username field
    And I enter a valid password
    And I click the "Sign In" button
    Then I should remain on the login page
    And I should see the error message "Username or password is invalid"
    And the "Sign In" button should become disabled
```

#### Test Data

| Field    | Value             |
| -------- | ----------------- |
| Username | (whitespace only) |
| Password | s3cret            |

#### Expected Result

The user remains on the login page. The error message "Username or password is invalid" is displayed. The "Sign In" button becomes disabled after the submission attempt.

#### Execution Status

| Field          | Content       |
| -------------- | ------------- |
| Status         | Not Executed  |
| Executed By    | Vanessa Sousa |
| Execution Date | -             |
| Evidence       | -             |

---

### TC-009: Login with Remember Me Enabled

| Field         | Content                                                                                                                                      |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| Test Case ID  | TC-009                                                                                                                                       |
| Feature       | User Authentication                                                                                                                          |
| Type          | Manual                                                                                                                                       |
| Priority      | Medium                                                                                                                                       |
| Preconditions | The RWA application is running in the local environment. No active session exists in the browser. A registered user exists in the seed data. |

#### Scenario

```gherkin
Feature: User Authentication

  Scenario: Login with Remember Me enabled
    Given I am on the RWA login page
    When I enter a valid username
    And I enter a valid password
    And I check the "Remember Me" option
    And I click the "Sign In" button
    And I close the browser
    And I reopen the browser and navigate to "http://localhost:3000"
    Then I should be automatically redirected to the dashboard
    And I should not be required to login again
```

#### Test Data

| Field       | Value   |
| ----------- | ------- |
| Username    | Dina20  |
| Password    | s3cret  |
| Remember Me | Enabled |

#### Expected Result

The user session persists after closing and reopening the browser. The user is automatically redirected to the dashboard without being required to login again.

#### Execution Status

| Field          | Content       |
| -------------- | ------------- |
| Status         | Not Executed  |
| Executed By    | Vanessa Sousa |
| Execution Date | -             |
| Evidence       | -             |

---

### TC-010: Login with Remember Me Disabled

| Field         | Content                                                                                                                                      |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| Test Case ID  | TC-010                                                                                                                                       |
| Feature       | User Authentication                                                                                                                          |
| Type          | Manual                                                                                                                                       |
| Priority      | High                                                                                                                                         |
| Preconditions | The RWA application is running in the local environment. No active session exists in the browser. A registered user exists in the seed data. |

#### Scenario

```gherkin
Feature: User Authentication

  Scenario: Login with Remember Me disabled
    Given I am on the RWA login page
    When I enter a valid username
    And I enter a valid password
    And I leave the "Remember Me" option unchecked
    And I click the "Sign In" button
    And I close the browser
    And I reopen the browser and navigate to "http://localhost:3000"
    Then I should be redirected to the login page
    And I should be required to login again
```

#### Test Data

| Field       | Value    |
| ----------- | -------- |
| Username    | Dina20   |
| Password    | s3cret   |
| Remember Me | Disabled |

#### Expected Result

The user session should expire after closing the browser. The user should be redirected to the login page and required to authenticate again.

#### Actual Result

⚠️ BUG: The session persists after closing the browser even with Remember Me disabled. The user is automatically redirected to the dashboard without being required to login again.

Bug Reference: BUG-001 – Reported in Jira.

#### Execution Status

| Field          | Content                |
| -------------- | ---------------------- |
| Status         | Failed                 |
| Executed By    | Vanessa Sousa          |
| Execution Date | 05/05/2026             |
| Evidence       | Pending Loom recording |

---

### TC-011: Registration with Password Not Meeting Requirements

| Field         | Content                                                                                           |
| ------------- | ------------------------------------------------------------------------------------------------- |
| Test Case ID  | TC-011                                                                                            |
| Feature       | User Authentication                                                                               |
| Type          | Manual                                                                                            |
| Priority      | High                                                                                              |
| Preconditions | The RWA application is running in the local environment. No active session exists in the browser. |

#### Scenario

```gherkin
Feature: User Authentication

  Scenario: Registration with password not meeting requirements
    Given I am on the RWA registration page
    When I click the "Sign Up" link
    And I enter a valid first name
    And I enter a valid last name
    And I enter a valid username
    And I enter a password with less than 4 characters
    And I enter the same password in the confirm password field
    Then the "Sign Up" button should be disabled
    And I should see the error message "Password must contain at least 4 characters"
```

#### Test Data

| Field            | Value       |
| ---------------- | ----------- |
| First Name       | Test        |
| Last Name        | User        |
| Username         | testuser_02 |
| Password         | abc         |
| Confirm Password | abc         |

#### Expected Result

The "Sign Up" button remains disabled. The error message "Password must contain at least 4 characters" is displayed below the password field.

#### Execution Status

| Field          | Content       |
| -------------- | ------------- |
| Status         | Not Executed  |
| Executed By    | Vanessa Sousa |
| Execution Date | -             |
| Evidence       | -             |

---

### TC-012: Registration with Already Existing Username

| Field         | Content                                                                                                                         |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| Test Case ID  | TC-012                                                                                                                          |
| Feature       | User Authentication                                                                                                             |
| Type          | Manual                                                                                                                          |
| Priority      | High                                                                                                                            |
| Preconditions | The RWA application is running in the local environment. No active session exists in the browser. The database has been seeded. |

#### Scenario

```gherkin
Feature: User Authentication

  Scenario: Registration with already existing username
    Given I am on the RWA registration page
    When I click the "Sign Up" link
    And I enter a valid first name
    And I enter a valid last name
    And I enter a username that already exists in the system
    And I enter a valid password
    And I confirm the password
    And I click the "Sign Up" button
    Then I should see an error message indicating that the username already exists
    And I should remain on the registration page
```

#### Test Data

| Field            | Value     |
| ---------------- | --------- |
| First Name       | Test      |
| Last Name        | User      |
| Username         | Heath93   |
| Password         | Test@1234 |
| Confirm Password | Test@1234 |

#### Expected Result

The system should display an error message indicating that the username already exists. The user should remain on the registration page.

#### Actual Result

⚠️ BUG: The system redirects the user to the login page without displaying an error message. When attempting to login with the new credentials, the message "Username or password is invalid" is displayed.

Bug Reference: BUG-002 – Reported in Jira.

#### Execution Status

| Field          | Content                |
| -------------- | ---------------------- |
| Status         | Failed                 |
| Executed By    | Vanessa Sousa          |
| Execution Date | 05/05/2026             |
| Evidence       | Pending Loom recording |

---

### TC-013: Registration with Passwords Not Matching

| Field         | Content                                                                                           |
| ------------- | ------------------------------------------------------------------------------------------------- |
| Test Case ID  | TC-013                                                                                            |
| Feature       | User Authentication                                                                               |
| Type          | Manual                                                                                            |
| Priority      | High                                                                                              |
| Preconditions | The RWA application is running in the local environment. No active session exists in the browser. |

#### Scenario

```gherkin
Feature: User Authentication

  Scenario: Registration with passwords not matching
    Given I am on the RWA registration page
    When I click the "Sign Up" link
    And I enter a valid first name
    And I enter a valid last name
    And I enter a valid username
    And I enter a valid password
    And I enter a different password in the confirm password field
    Then the "Sign Up" button should be disabled
    And I should see the error message "Password does not match"
```

#### Test Data

| Field            | Value       |
| ---------------- | ----------- |
| First Name       | Test        |
| Last Name        | User        |
| Username         | testuser_03 |
| Password         | Test@1234   |
| Confirm Password | Test@5678   |

#### Expected Result

The "Sign Up" button remains disabled. The error message "Password does not match" is displayed below the confirm password field.

#### Execution Status

| Field          | Content       |
| -------------- | ------------- |
| Status         | Not Executed  |
| Executed By    | Vanessa Sousa |
| Execution Date | -             |
| Evidence       | -             |

---

### TC-014: Registration with All Fields Empty

| Field         | Content                                                                                           |
| ------------- | ------------------------------------------------------------------------------------------------- |
| Test Case ID  | TC-014                                                                                            |
| Feature       | User Authentication                                                                               |
| Type          | Manual                                                                                            |
| Priority      | High                                                                                              |
| Preconditions | The RWA application is running in the local environment. No active session exists in the browser. |

#### Scenario

```gherkin
Feature: User Authentication

  Scenario: Registration with all fields empty
    Given I am on the RWA registration page
    When I click the "Sign Up" link
    And I leave all fields blank
    And I click the "Sign Up" button
    Then the "Sign Up" button should become disabled
    And I should see the error message "First Name is required"
```

#### Test Data

No test data required. All fields are left blank.

#### Expected Result

The "Sign Up" button becomes disabled after the submission attempt. The error message "First Name is required" is displayed below the first name field.

#### Execution Status

| Field          | Content       |
| -------------- | ------------- |
| Status         | Not Executed  |
| Executed By    | Vanessa Sousa |
| Execution Date | -             |
| Evidence       | -             |

---

### TC-015: Registration with Whitespace in All Fields

| Field         | Content                                                                                           |
| ------------- | ------------------------------------------------------------------------------------------------- |
| Test Case ID  | TC-015                                                                                            |
| Feature       | User Authentication                                                                               |
| Type          | Manual                                                                                            |
| Priority      | High                                                                                              |
| Preconditions | The RWA application is running in the local environment. No active session exists in the browser. |

#### Scenario

```gherkin
Feature: User Authentication

  Scenario: Registration with whitespace in all fields
    Given I am on the RWA registration page
    When I click the "Sign Up" link
    And I enter only whitespace in the first name field
    And I enter only whitespace in the last name field
    And I enter only whitespace in the username field
    And I enter only whitespace in the password field
    And I enter only whitespace in the confirm password field
    And I click the "Sign Up" button
    Then I should remain on the registration page
    And I should see a validation error message indicating that the fields cannot contain only whitespace
```

#### Test Data

| Field            | Value             |
| ---------------- | ----------------- |
| First Name       | (whitespace only) |
| Last Name        | (whitespace only) |
| Username         | (whitespace only) |
| Password         | (whitespace only) |
| Confirm Password | (whitespace only) |

#### Expected Result

The system should display validation error messages indicating that the fields cannot contain only whitespace. The user should remain on the registration page.

#### Actual Result

⚠️ BUG: The system accepts whitespace in all fields, including the password field, bypassing all input validation. The user is redirected to the login page. When attempting to login with the whitespace credentials, the message "Username or password is invalid" is displayed.

Bug Reference: BUG-003 – Reported in Jira.

#### Execution Status

| Field          | Content                |
| -------------- | ---------------------- |
| Status         | Failed                 |
| Executed By    | Vanessa Sousa          |
| Execution Date | 05/05/2026             |
| Evidence       | Pending Loom recording |

---

### TC-016: Registration with Excessively Long Input in All Fields

| Field         | Content                                                                                           |
| ------------- | ------------------------------------------------------------------------------------------------- |
| Test Case ID  | TC-016                                                                                            |
| Feature       | User Authentication                                                                               |
| Type          | Manual                                                                                            |
| Priority      | Medium                                                                                            |
| Preconditions | The RWA application is running in the local environment. No active session exists in the browser. |

#### Scenario

```gherkin
Feature: User Authentication

  Scenario: Registration with excessively long input in all fields
    Given I am on the RWA registration page
    When I click the "Sign Up" link
    And I enter an excessively long value in the first name field
    And I enter an excessively long value in the last name field
    And I enter an excessively long value in the username field
    And I enter an excessively long value in the password field
    And I confirm the password with the same excessively long value
    And I click the "Sign Up" button
    Then the system should display a validation error message indicating that the maximum character limit has been exceeded
    And I should remain on the registration page
```

#### Test Data

| Field            | Value                                                                                                |
| ---------------- | ---------------------------------------------------------------------------------------------------- |
| First Name       | aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa |
| Last Name        | aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa |
| Username         | aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa |
| Password         | 1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111 |
| Confirm Password | 1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111 |

#### Expected Result

The system should display a validation error message indicating that the maximum character limit has been exceeded. The user should remain on the registration page.

#### Actual Result

⚠️ BUG: The system accepts excessively long input in all fields without any validation. The user is successfully registered and redirected to the dashboard with no error messages displayed.

Bug Reference: BUG-004 – Reported in Jira.

#### Execution Status

| Field          | Content                |
| -------------- | ---------------------- |
| Status         | Failed                 |
| Executed By    | Vanessa Sousa          |
| Execution Date | 05/05/2026             |
| Evidence       | Pending Loom recording |

---

### TC-017: Registration with Minimum Invalid Data – Password Below Minimum Length

| Field         | Content                                                                                           |
| ------------- | ------------------------------------------------------------------------------------------------- |
| Test Case ID  | TC-017                                                                                            |
| Feature       | User Authentication                                                                               |
| Type          | Manual                                                                                            |
| Priority      | Medium                                                                                            |
| Preconditions | The RWA application is running in the local environment. No active session exists in the browser. |

#### Scenario

```gherkin
Feature: User Authentication

  Scenario: Registration with minimum invalid data - password below minimum length
    Given I am on the RWA registration page
    When I click the "Sign Up" link
    And I enter "a" in the first name field
    And I enter "a" in the last name field
    And I enter "a" in the username field
    And I enter "1" in the password field
    And I enter "1" in the confirm password field
    Then the "Sign Up" button should be disabled
    And I should see the error message "Password must contain at least 4 characters"
```

#### Test Data

| Field            | Value |
| ---------------- | ----- |
| First Name       | a     |
| Last Name        | a     |
| Username         | a     |
| Password         | 1     |
| Confirm Password | 1     |

#### Expected Result

The "Sign Up" button remains disabled. The error message "Password must contain at least 4 characters" is displayed below the password field.

#### Execution Status

| Field          | Content       |
| -------------- | ------------- |
| Status         | Not Executed  |
| Executed By    | Vanessa Sousa |
| Execution Date | -             |
| Evidence       | -             |

---

### TC-018: Registration with Minimum Invalid Data – No Minimum Length Validation on Text Fields

| Field         | Content                                                                                           |
| ------------- | ------------------------------------------------------------------------------------------------- |
| Test Case ID  | TC-018                                                                                            |
| Feature       | User Authentication                                                                               |
| Type          | Manual                                                                                            |
| Priority      | Medium                                                                                            |
| Preconditions | The RWA application is running in the local environment. No active session exists in the browser. |

#### Scenario

```gherkin
Feature: User Authentication

  Scenario: Registration with minimum invalid data - no minimum length validation on text fields
    Given I am on the RWA registration page
    When I click the "Sign Up" link
    And I enter "a" in the first name field
    And I enter "a" in the last name field
    And I enter "a" in the username field
    And I enter "1234" in the password field
    And I enter "1234" in the confirm password field
    And I click the "Sign Up" button
    Then the system should display a validation error message indicating that the fields do not meet the minimum length requirement
    And I should remain on the registration page
```

#### Test Data

| Field            | Value |
| ---------------- | ----- |
| First Name       | a     |
| Last Name        | a     |
| Username         | a     |
| Password         | 1234  |
| Confirm Password | 1234  |

#### Expected Result

The system should display a validation error message indicating that the text fields do not meet the minimum length requirement. The user should remain on the registration page.

#### Actual Result

⚠️ BUG: The system accepts a single character in all text fields without any minimum length validation. The user is successfully registered and redirected to the dashboard with no error messages displayed.

Bug Reference: BUG-005 – Reported in Jira.

#### Execution Status

| Field          | Content                |
| -------------- | ---------------------- |
| Status         | Failed                 |
| Executed By    | Vanessa Sousa          |
| Execution Date | 05/05/2026             |
| Evidence       | Pending Loom recording |
