class AdminPage {
    // Navigate to Admin page
    navigateToAdmin() {
        cy.get('ul.oxd-main-menu li.oxd-main-menu-item-wrapper a').contains('Admin').click();
    }

    // Add a new user
    addUser() {
        cy.get(".orangehrm-header-container button.oxd-button--secondary").contains('Add').click();
    }

    selectUserRole(role) {
        cy.get('.oxd-select-text-input').contains('-- Select --').click();
        cy.get('.oxd-select-dropdown').should('be.visible');
        cy.get('.oxd-select-dropdown').click();
        cy.get('.oxd-select-text-input').should('contain', role);
    }





    // Select User Status from dropdown
    selectUserStatus(status) {
        cy.get('.oxd-select-text-input').contains('-- Select --').click();
        cy.get('.oxd-select-dropdown').contains(status).click();
        cy.get('.oxd-select-text-input').should('contain', status);
    }

    // Enter username
    enterUsername(username) {
        cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type(username);
    }

    // Enter password
    enterPassword(password) {
        cy.get('input[type="password"]').first().type(password);
    }

    // Enter Confirm Password
    enterConfirmPassword(confirmPassword) {
        cy.get('input[type="password"]').eq(1).type(confirmPassword);
    }

    // Save user
    saveUser() {
        cy.get(".oxd-form-actions button.oxd-button").contains(' Save ').click();
    }

    // Select employee name from suggestions
    selectEmployeeName(name) {
        cy.get('input[placeholder="Type for hints..."]').type(name);
        cy.wait(1000);
        cy.get('.oxd-autocomplete-dropdown').contains('Test Sample 01').click();
    }

    getErrorMesgXUSer(){
        return cy.get(".oxd-input-field-error-message")
    }

    searchUser(username){
        cy.get(':nth-child(2) > .oxd-input').type(username)
    }

    SearchBtn(){
        cy.get(".oxd-form-actions button.oxd-button").contains(' Search ').click();
    }
    
    editUser(){
        // cy.get('.oxd-icon-button.oxd-table-cell-action-space').eq(0); // First match
        cy.get('.oxd-icon-button.oxd-table-cell-action-space').eq(1).click(); // Second match

    }

    getErrorMesgForRequiredFields() {
        return cy.get('.oxd-input-field-error-message');
    }

    validateUserInSearchResults(recordCount) {
        cy.get('.oxd-text.oxd-text--span').contains(`(${recordCount}) Record Found`);
    }
    
    deleteUser(){
        cy.get(".oxd-table-cell-action-space").first().click()
    }

    confirmDelete(){
        cy.get('.oxd-button--label-danger').contains(' Yes, Delete ').click()
    }

    delReqNoFound(){
        cy.get('.orangehrm-horizontal-padding > .oxd-text')
    }
    

    deleteButtonExists(){
        cy.get(".oxd-table-cell-action-space").first()

    }


}

export default AdminPage;
