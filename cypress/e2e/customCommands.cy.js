/// <reference types='cypress'/>
import typeLogin from '../support/commands'



// This test suite demonstrates the use of custom Cypress commands 
// for login and logout functionality on the OrangeHRM platform.

describe('Custom Commands', () => {
    beforeEach(() => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"); // Navigates to the target URL
    });

    it("SuccessLogin Test", () => {
        cy.typeLogin('Admin', 'admin123'); // Logs in using the custom command
    });

    afterEach(()=>{
        cy.wait(4000)
        cy.LogOut();
    });
});
