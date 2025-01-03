/// <reference types='cypress'/>

describe('How to Handle a Popup message like conirm...',()=>{

    it('handle an Alert', ()=>{
        cy.visit('https://webdriveruniversity.com/Popup-Alerts/index.html')

        cy.get('#button4').click()
        cy.on('window:confirm', (cnfm)=>{
            // return true
            return false

        })

        // cy.get('#confirm-alert-text').should('have.text', 'You pressed OK!')
        
        cy.get('#confirm-alert-text').should('have.text', 'You pressed Cancel!')
    })

    it("Handling the ALrts",()=>{

        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get("#alertbtn").click()
        cy.get("#confirmbtn").click()

        // window:alert

        cy.off('window:alert',(str)=>{
            expect(str).to.equal("Hello , share this practice page and share your knowledge")
        })

        cy.off('window:confirm',(str)=>{
            expect(str).to.equal("Hello , Are you sure you want to confirm?")
        })
    })

    it.only("Should handle child window",()=>{
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        cy.get("#opentab").invoke('removeAttr','target').click();
        // cy.get("#opentab").click();

        cy.origin("https://www.qaclickacademy.com/",()=>{

            cy.get("#navbarSupportedContent a[href*='about']").click()
            cy.get(".mt-50 h2").should('contain','Welcome to QAClick Academy ')
        })

    })
})