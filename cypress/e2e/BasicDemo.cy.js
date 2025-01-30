{<reference types='cypress'/> }


describe('First Test suit', ()=>{
    it('1st test', ()=>{
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.wait(2000)
        // cy.visit('https://login.microsoftonline.com/')
        cy.get('.search-keyword').type('Ap')
        cy.wait(3000)
        cy.get('.products').find('.product').should('have.length', 2)
        cy.wait(3000)
        cy.get('.brand.greenLogo').invoke('text').then((value)=>{
            cy.log(value)
        })
       
     
        // cy.get('.product:visible').should('have.length', 2);


    })

 
})