describe('new',()=>{
    it('try',()=>{

        cy.visit("https://www.cypress.io/")
        cy.title().should('eq','Testing Frameworks for Javascript | Write, Run, Debug | Cypress')
        
    })



})