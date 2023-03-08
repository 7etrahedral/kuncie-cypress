describe('Demoblaze app Login Scenario', () => {
  it('Successfully login using correct username password', () => {
    cy.visit('https://www.demoblaze.com/')
    cy.viewport('macbook-13')

    cy.get(`[data-target='#logInModal']`).click()
    cy.get(`[onclick='logIn()']`).should('be.visible')
    cy.wait(1000)
    cy.get('#loginusername')
      .type('wibowo.bullseye')
      .should('have.value', 'wibowo.bullseye')
    cy.get('#loginpassword').type('bullseye')
    cy.get(`[onclick='logIn()']`).click()

    cy.wait(2000)
    cy.get('#nameofuser').should('contain', 'wibowo.bullseye')
  })
})
