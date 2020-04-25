Feature: Amazon Test
    Testing Main Features

    @positive @signUp
    Scenario: I sign up to Amazon (up to Verify email address)
        Given I open Amazon website
        When I click the Sign in button
        Then I should see the Sign in page
        When I click the Create Your Amazon Account button in Sign in page
        Then I should see the Sign up page
        When I fill the name field with "Tester Mekari", email field with "tester@mekaritest.com", password field with "testmekari123", and re-enter password with "testmekari123"
        And I click Create Your Amazon Account button
        Then I can see Verify email address page

    @negative @signUp
    Scenario: I sign up to Amazon with invalid email
        Given I open Amazon website
        When I click the Sign in button
        Then I should see the Sign in page
        When I click the Create Your Amazon Account button in Sign in page
        Then I should see the Sign up page
        When I fill the name field with "Tester Mekari", email field with "tester@", password field with "testmekari123", and re-enter password with "testmekari123"
        And I click Create Your Amazon Account button
        Then I can see error message on email field