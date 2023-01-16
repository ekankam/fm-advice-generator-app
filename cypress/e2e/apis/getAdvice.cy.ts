/// <reference types="cypress" />


describe('make a GET request to fetch random advice', () => {
  it('gets random advive', () => {
    cy.request('https://api.adviceslip.com/advice').then(response => {
      console.log(response)
      expect(response.status).to.eq(200);
      expect(response.allRequestResponses).to.have.length(1)
    })
  })
})