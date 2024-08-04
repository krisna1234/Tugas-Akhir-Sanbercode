Feature: Kasir Login Test

    @all @positive
    Scenario: Login successfully with valid credentials
        Given I Open Kasir website
        When I Login with valid credentials
        Then I Should be on the dashboard

    @all @negative
    Scenario: Failed Login with invalid username
        Given I Open Kasir website
        When I Login with invalid username
        Then I Should be on error message

    @all @negative
    Scenario: Failed Login with invalid password
        Given I Open Kasir website
        When I Login with invalid password
        Then I Should be on error message