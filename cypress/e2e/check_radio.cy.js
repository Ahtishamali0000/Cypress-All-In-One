


describe('This is Check  box & Radio button Tests',()=>{

    it('Check box', ()=>{

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.wait(3000)
        cy.get('[type="checkbox"]').check(['option2','option3']).should('be.checked').and('have.value', 'option2')
        cy.get('#checkBoxOption2').uncheck().should('not.be.checked')
        // cy.get('#checkBoxOption2').check().should('be.checked').and('have.value', 'option2')
        // cy.get('#checkBoxOption3').check().should('be.checked').and('have.value', 'option3')
        cy.get('[value="radio1"]').check().should('be.checked')

        
    })


})

