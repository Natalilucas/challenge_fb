Feature: User Registration Form

  Scenario: As a user, I can register an account
    Given I am on the register page
    When I fill in the name field with "Natali Lucas"
    And I fill in the email field with "natali_l@hotmail.com"
    And I fill in the password field "123456"
    And I press the button submit to create an account
    Then I recieve a confirmation email at "natali_l@hotmail.com"

  Scenario: As a user, I cannot register an account without a user name
    Given I enter on the register page
    And I fill in the email field with "natali_l@hotmail.com"
    And I fill in the password field "123456"
    And I press the button submit to create an account
    Then I must receive an error message "You must inform a name"

  Scenario: As a user, I cannot register an account without an email
    Given I visit on the register page
    When I fill in the name field with "Natali"
    And I fill in the password field "123456"
    And I press the button submit to create an account
    Then I must receive an error message "You must inform an email"

  Scenario: As a user, I cannot register an account without a password
    Given I'm on the register page
    When I fill in the name field with "Natali"
    And I fill in the email field with "natali_l@hotmail.com"
    And I press the button submit to create an account
    Then I must receive an error message "You must inform a password"

  Scenario: As a user, I cannot register an account with duplicate email
    Given I enter on register page
    When I fill in the name field with "Natali"
    And I fill in the email field with a registered email "natali_l@hotmail.com"
    And I fill in the password field "123456"
    And I press the button submit to create an account
    Then I must receive an error message "Email already registered"

  Scenario: As a user, I cannot log in without a registration
    Given I am on the login
    And I am not logged in
    When I fill in the login field a non registered name "Joana"
    And I fill in the login field a non registered password "123456"
    And I press the button submit and enter in my account
    Then I must receive an error message "User does not exit"

  Scenario: As a user, I can log into a registered account
    Given I enter the login page
    And I am not logged in
    When I fill in the login field with a registered name and password "Natali 123456"
    And I press the button submit and enter in my account
    Then the user should be sucessfully logged in and receive a message "Sucessfully Log"

  Scenario: As a user, I cannot log in with an incorrect password
    Given I open the login page
    And I am not logged in
    When I fill in the name field with "Natali"
    And I fill in with an incorrect password "333333"
    And I press the button submit and enter in my account
    Then I must receive an error message "Password is incorrect"
