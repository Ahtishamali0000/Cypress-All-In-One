/// <reference types='cypress'/>


 
describe('Browser navigation', ()=>{

    it('1st Test', ()=>{
        
        cy.visit('https://rahulshettyacademy.com/')
        cy.get('div.page-wrapper:nth-child(1) header.main-header:nth-child(2) div.header-upper:nth-child(3) div.auto-container div.clearfix div.nav-outer.clearfix nav.main-menu div.navbar-collapse.collapse.clearfix ul.navigation.clearfix li:nth-child(6) > a:nth-child(1)').click().wait(2000)
        // cy.go('back').wait(2000)
        // cy.go('forward').wait(2000)

        cy.go(-2).wait(2000)
        cy.go(+1).wait(2000)
        

    })
})

