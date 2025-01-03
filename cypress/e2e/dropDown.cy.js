// {<reference types='cypress'/> }


describe('DropDown Test Suit', ()=>{


    it('1st test case', ()=>{

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#dropdown-class-example').select('Option3').should('have.value','option3')
        cy.wait(3000)
        cy.get('#autocomplete').type('Pa').get('.ui-menu-item-wrapper').each((ele)=>{
            // cy.log(ele.text())

            if(ele.text()==="Pakistan")
            cy.wrap(ele).click()
        })


    })



})