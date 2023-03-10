Feature: Login
  Scenario: Bambang wants to login to view store as member
    When Bambang input a valid credential as hore
    Then Bambang should see Log out button
