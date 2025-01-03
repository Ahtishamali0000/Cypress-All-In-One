/// <reference types='cypress' />

import LoginPage from "../../PageObjects/Login_Object";
import AdminPage from "../../PageObjects/AdminPage";

const loginPage = new LoginPage();
const admin = new AdminPage();

describe("User Management Systems", () => {
    let loginData;

    before(() => {
        cy.fixture('loginData').then((data) => {
            loginData = data; // Load loginData globally
        });
    });

    beforeEach(() => {
        cy.visit('/login');
        loginPage.login(loginData.username, loginData.password); // Use loginData from fixture
    });

    beforeEach(() => {
        // Reuse login functionality
        cy.visit('/login');
        loginPage.login(testData.validUser.username, testData.validUser.password);
        cy.url().should('include', '/dashboard');
    });

    it('Should display the admin dashboard', () => {
        admin.navigateToAdmin(); // Navigate to Admin page
        cy.url().should('contain', '/admin/viewSystemUsers');
    });

    it("Should allow adding a new user", () => {
        // Navigate to Admin and perform actions
        admin.navigateToAdmin();
        admin.addUser();
        admin.selectUserRole('Admin');
        admin.selectUserStatus('Enabled');
        admin.enterUsername(testData.AdminUser.username);
        admin.enterPassword(testData.AdminCred.password);   
        admin.enterConfirmPassword(testData.AdminCred.confirmPassword);
        admin.selectEmployeeName('a');
        admin.saveUser();
    });

    it('Should validate required fields for adding a new user', () => {
        admin.navigateToAdmin();
        admin.addUser();
        admin.saveUser(); // Attempt to save without entering required fields
    
        // Validate error message for required fields
        admin.getErrorMesgForRequiredFields().should('contain', 'Required');
    });
    
    

    it('Should not allow duplicate usernames', () => {
        admin.navigateToAdmin();
        admin.addUser();
        admin.selectUserRole('Admin');
        admin.selectUserStatus('Enabled');
        admin.enterUsername(testData.AdminUser.username);
        admin.enterPassword(testData.AdminCred.password);
        admin.enterConfirmPassword(testData.AdminCred.confirmPassword);
        admin.selectEmployeeName('a');
        admin.saveUser();

        // Validate error message for duplicate username
        admin.getErrorMesgXUSer().should('contain', 'Already exists');
    });

    it('Should allow editing an existing user', () => {
        admin.navigateToAdmin();
        admin.searchUser(testData.SearchUser.username);
        admin.SearchBtn();
        admin.editUser();
        admin.enterUsername(testData.SearchUser.newUser);
        admin.saveUser();
    });

    it('Should search for users by username', () => {
        admin.navigateToAdmin();
        admin.searchUser(testData.SearchUser.username);
        admin.SearchBtn();
        admin.validateUserInSearchResults(1);
    });

    it.only('Should allow deleting a user', () => {
        admin.navigateToAdmin();
        admin.searchUser(testData.deleteUser.username);
        admin.SearchBtn();
        admin.deleteUser();
        cy.wait(3000)
        admin.confirmDelete(); 
        // admin.validateUserNotInSearchResults(testData.SearchUser.username).should('not.exist');
        cy.wait(3000)
        cy.on('window:alert',(str)=>{
            expect(str).to.equal("Successfully deleted")
        })
        
    });
    
    

    
});
