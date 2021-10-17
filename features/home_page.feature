Feature: Google Home Page -- BDD Gherkin
  Validating the Home Page elements
  and functionalities

  Background:
    Given I am on the Google Home page

  Scenario: Validate text inside the "Google Search" button
    Then The Google Search button should have value of "Google Search"

  Scenario: Validate text inside the "I'm Feeling Lucky" button
    Then The I'm Feeling Lucky button should have value of "I'm Feeling Lucky"


  Scenario: Validate Home Page title
    When I refresh the page
    Then The page title should be "Google"
    And The word "About" should be visible on the page
      


  Scenario: Validate the search functionality
    When I enter "Java" to the search box
    And I push the ENTER key
    Then I should see "Java" in the page title
    And I should see "Java | JS" in the page


# @DDT
# Scenario Outline: Validating text inside buttons on the home page
#   Then The <button> should have the "<text>" value

# Example: Buttons and their texts
#     | button       | value             |
#     | googleSearch | Google Search     |
#     | feelLucky    | I'm Feeling Lucky |

