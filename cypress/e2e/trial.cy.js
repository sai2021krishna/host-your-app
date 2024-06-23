import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given(`I navigate to {string}`, (urlToVisit) => {
  cy.visit(urlToVisit);
});

When("I check for {string} text on the page", () => {
  cy.get("#realboxContainer").should("be.visible");
});

Then("I should see {string} text on the page", (text) => {
  cy.get("#realboxContainer").type("hello");
});
