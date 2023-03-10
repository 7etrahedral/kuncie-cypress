import { When, Then } from "@badeball/cypress-cucumber-preprocessor";


When(/^Bambang input a valid credential as hore$/, () => {
	cy.visit("https://www.demoblaze.com/index.html");
  cy.get(`[data-target='#logInModal']`).click();
  cy.get(`[onclick='logIn()']`).should('be.visible');
  cy.wait(1000);
  cy.get('#loginusername')
      .type('hore')
      .should('have.value', 'hore');
  cy.get('#loginpassword').type('hore1111');
  cy.get(`[onclick='logIn()']`).click();
});

Then(/^Bambang should see Log out button$/, () => {
	cy.wait(2000);
  cy.get('#nameofuser').should('contain', 'hore');
  cy.get('#logout2').should('be.visible');
});
