Feature: Visit Google.com and check for google text
Background: Navigate to Googlr.com
    Given I navigate to "https://www.google.com"
Scenario: Check for Google text
    When I check for "Google" text on the page
    Then I should see "Google" text on the page