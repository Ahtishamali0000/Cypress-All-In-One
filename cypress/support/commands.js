// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import 'cypress-xpath';
import 'cypress-file-upload';
import 'cypress-file-upload';

// Custom command to perform login
Cypress.Commands.add('typeLogin', (username, password) => {
    cy.get("[Placeholder='Username']").type(username); // Input the username
    cy.get("[Placeholder='Password']").type(password); // Input the password
    cy.get("[type='submit']").click();    // Click the login button
});

Cypress.Commands.add('LogOut',()=>{
    cy.get('.oxd-userdropdown-tab').click();
        cy.contains('Logout').click();
})


