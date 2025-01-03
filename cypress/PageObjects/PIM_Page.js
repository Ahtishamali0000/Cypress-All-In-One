class PIM_Page {

    navigateToPIM() {
        cy.get('ul.oxd-main-menu li.oxd-main-menu-item-wrapper a').contains('PIM').click();
    }

    employeeFirstNameIP() {
        return cy.get('[placeholder="First Name"]');
    }

    employeeMidNameIP() {
        return cy.get('[placeholder="Middle Name"]');
    }

    employeeLastNameIP() {
        return cy.get('[placeholder="Last Name"]');
    }

    loginCheckBox() {
        cy.get('.oxd-switch-input').click();
    }

    username(){
        return cy.get(':nth-child(4) > .oxd-grid-2 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input');
    }

    userPassword(){
        return cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input');
    }

    userCPassword(){
        return cy.get('.oxd-grid-2 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input')
    }

    addUser(userfname, userMname, userLname) {
        this.employeeFirstNameIP().type(userfname);
        this.employeeMidNameIP().type(userMname);
        this.employeeLastNameIP().type(userLname);

        // Optional: Assert that fields contain the values
        this.employeeFirstNameIP().should('have.value', userfname);
        this.employeeMidNameIP().should('have.value', userMname);
        this.employeeLastNameIP().should('have.value', userLname);
    }

    UserloginCred(user_name, user_Pass, user_CPass){
        this.username().type(user_name);
        this.userPassword().type(user_Pass);
        this.userCPassword().type(user_CPass);
    }
}

export default PIM_Page;
