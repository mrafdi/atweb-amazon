Feature: Amazon Test
    Testing Main Features

    @positive @signIn
    Scenario: I sign in to Amazon
        Given I open Amazon website
        When I click the Sign in button
        Then I should see the Sign in page
        When I fill the email field with valid email
        And I click Continue button on sign in page
        Then I should see the Sign in input password page
        When I fill the password field with valid password
        And I click Sign In button on Sign in page
        Then I can see that I am logged in to my account

    @negative @signIn
    Scenario: I sign in to Amazon with unregistered email
        Given I open Amazon website
        When I click the Sign in button
        Then I should see the Sign in page
        When I fill the email field with unregistered email "rafdi@gma.com"
        And I click Continue button on sign in page
        Then I can see error message in Sign in page that the email address not found