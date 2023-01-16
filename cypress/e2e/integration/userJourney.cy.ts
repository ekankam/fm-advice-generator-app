/// <reference types="cypress" />


describe("App Page", () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/')
  })

  it("displays advice card", () => {
    cy.get('[data-cy="advice-card"]').should('be.visible')
    cy.get('[data-cy="submit-button"]').should('be.visible')
  })

  it.only("generate random advice", () => {
    cy.get('[data-cy="submit-button"]').should('be.visible').click()
    cy.get('[data-cy="advice-card"]').should('be.visible').within(() => {
      cy.get('[data-cy="advice-card-content"]').should('be.visible').within(() => {
        cy.get('p').eq(0).should('be.visible')
        cy.get('p').eq(1).should('be.visible')
      })
    })
  })
})