/// <reference types='cypress'/>


describe('To get values in table', () => {

    it('1st test about Table', () => {

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('tr td:nth-child(2)').each((ele, index) => {

            const eleText = ele.text()

            // cy.log('This is Index', {index}, 'This is Element', {eleText})

            if (eleText.includes('Resume'))
                cy.log('This is Index', { index }, 'This is Element', { eleText })


            // cy.get('tr td:nth-child(2)').next()



        })


    })
})