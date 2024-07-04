This tests plans was based on ISTQB definitions

Case 1: Form filled successfully.
Case 2: Form filled without the name.
Case 3: Form filled without the email.
Case 4: Form filled without the password.
Case 5: Form filled with an already registered email.
Case 6: User tries to log in without registration.
Case 7: User logs in after registration with correct data.
Case 8: User tries to log in with an incorrect password.

Test Case 1: Successfully Filled Form (AC1, AC2, AC3)

Description: Verify the registration form is successfully submitted by filling in all fields with valid inputs.

Preconditions:
    1. The user must access the registration screen.
    2. Fields must be enabled to receive data.
    3. The user must not already be registered.
    4. The email must not be duplicated.
Inputs:
    1. Valid name, e.g., Natali Lucas.
    2. Valid email, e.g., natali_l@hotmail.com.
    3. Valid password, e.g., 123456.
Actions:
    1. Access the registration screen.
    2. Correctly fill in the name field with a valid input.
    3. Correctly fill in the email field with a valid input.
    4. Correctly fill in the password field with a valid input.
    5. Click the submit registration button.
Expected Results:
    The user should receive a confirmation email at the registered email address.

Test Case 2: Form Filled Without Name (AC1, AC3)

Description: Verify that the name field must be filled out.

Preconditions:
    1. The user must access the registration screen.
    2. Fields must be enabled to receive data.
    3. The user must not already be registered.
    4. The email must not be duplicated.
Inputs:
    1. Empty name input.
    2. Valid email, e.g., natali_l@hotmail.com.
    3. Valid password, e.g., 123456.
Actions:
    1. Access the registration screen.
    2. Do not fill in the name field.
    3. Correctly fill in the email field with a valid input.
    4. Correctly fill in the password field with a valid input.
    5. Click the submit registration button.
Expected Results:
    The registration should not be completed, and an error message should be displayed indicating that the name is required.


Test Case 3: Form Filled Out Without Email (AC1, AC3)

Description: Verify that the email field is mandatory and must be filled out.

Preconditions:
    1. The user must access the registration screen.
    2. The fields must be enabled to accept data.
    3. The user should not have a registered account.

Inputs:
    1. Valid name, e.g., Natali;
    2. Empty email input;
    3. Valid password, e.g., 123456;

Actions:
    1. Access the registration screen.
    2. Properly fill in the name field with a valid input.
    3. Leave the email field empty.
    3. Properly fill in the password field with a valid input.
    4. Click the submit registration button.

Expected Results:
    The registration should not be completed, displaying an error message to be defined.


Test Case 4: Form Filled Out Without Password (AC1, AC3)

Description: Verify that the password field is mandatory and must be filled out.

Preconditions:
    1. The user must access the registration screen.
    2. The fields must be enabled to accept data.
    3. The user should not have a registered account.
    4. The email must not be duplicated.

Inputs:
    1. Properly fill in the email field with a valid input.
    2. Valid name, e.g., Natali;
    3. Empty password input;

Actions:
    1. Access the registration screen.
    2. Properly fill in the name field with a valid input.
    3. Properly fill in the email field with a valid input.
    4. Leave the password field empty.
    5. Click the submit registration button.

Expected Results:
    The registration should not be completed, displaying an error message to be defined.

Test Case 5: Form Filled Out with an already registered email (AC2)

Description: Validate that the email does not already exist in the database.

Preconditions:
    1. The user must access the registration screen.
    2. The fields must be enabled to accept data.
    3. The user should not have a registered account.
    4. The email must not be duplicated.

Inputs:
    1. Valid name.
    2. An email that already exists in the database.
    3. Valid password.

Actions:
    1. Access the registration screen.
    2. Properly fill in the name field with a valid input.
    3. Enter an email that already exists in the database.
    4. Fill in the password field with a valid input.
    5. Click the submit registration button.

Expected Results:
    The registration should not be completed, and an error message should be displayed stating "Email already registered!"

Test Case 6: User Attempts to Log In Without Registration (AC3)

Description: Validate that it is not possible to log in without being registered.

Preconditions:
    1.The user must access the login screen.
    2. The fields must be enabled to accept data.
    3. The user should not have a registered account.

Inputs:
    1. Valid name.
    2. Valid email.
    3. Valid password.

Actions:
    1. Access the login screen.
    2. Enter a valid but unregistered name into the name field.
    3. Enter a valid but unregistered email into the email field.
    4. Enter a valid but unregistered password into the password field.
    5. Click the submit button.

Expected Results:
    The login should not be completed, and an error message such as "User not registered" should be displayed.

Test Case 7: User Logs In Successfully After Registration with Correct Data (AC3, AC4)

Description: Validate the success of logging in after successful registration.

Preconditions:
    1. The user must access the login screen.
    2. The fields must be enabled to accept data.
    3. The user must have a registered account.
    4. The user must have received the confirmation email.

Inputs:
    1. Registered name.
    2. Registered email.
    3. Registered password.

Actions:
    1. Access the login screen.
    2. Properly enter the registered name into the name field.
    3. Enter the registered email into the email field.
    4. Enter the registered password into the password field.
    5. Click the submit button.

Expected Results:
    The login should be successful, and the user should be directed to the homepage logged in.


Test Case 8: User Attempts to Log In with Incorrect Password (AC3, AC4)

Description: Validate that it is not possible to log in with an incorrect password.

Preconditions:
    1. The user must access the login screen.
    2. The fields must be enabled to accept data.
    3. The user must have a registered account.
    4. The user must have received the confirmation email.

Inputs:
    1. Registered name.
    2. Registered email.
    3. Invalid password.

Actions:
    1. Access the login screen.
    2. Enter the registered name into the name field.
    3. Enter the registered email into the email field.
    4. Enter a password different from the registered one into the password field.
    5. Click the submit button.

Expected Results:
    The login should not be successful, and an error message should be displayed, such as "Incorrect password."