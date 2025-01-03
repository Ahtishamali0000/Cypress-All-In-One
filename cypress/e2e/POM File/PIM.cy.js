/// <reference types='cypress'/>

import LoginPage from "../../PageObjects/Login_Object";
import AdminPage from "../../PageObjects/AdminPage";
import PIM_Page from "../../PageObjects/PIM_Page";

const loginPage = new LoginPage();
const admin = new AdminPage();
const pimPage = new PIM_Page();

describe("PIM Page - Employee Management", () => {
    let loginData;
    let employeeData;

    before(() => {
        cy.fixture('loginData').then((data) => {
            loginData = data;
        });

        cy.fixture('employeedata').then((data) => {
            employeeData = data;
        });
    });

    beforeEach(() => {
        cy.visit('/login');
        loginPage.login(loginData.validUser.username, loginData.validUser.password);
    });

    it('Should display the PIM dashboard', () => {
        pimPage.navigateToPIM();
        cy.url().should('contain', '/pim/viewEmployeeList');
    });

    it.only('Should allow adding a new employee', () => {
        pimPage.navigateToPIM();
        admin.addUser();

        pimPage.addUser(employeeData.newEmployee.FirstName, employeeData.newEmployee.MidName, employeeData.newEmployee.LastName);

        // Validate employee is added
        // cy.get('table').contains('td', employeeData.newEmployee.name).should('exist');

        // Add a image

        // cy.get('.employee-image').selectFile("C:\\Users\\user1\\Pictures\\image.jpg", { force: true })

        pimPage.loginCheckBox();
    

        pimPage.UserloginCred(employeeData.UserLogin.name,employeeData.UserLogin.Password,employeeData.UserLogin.ConfirmPassword,)
        admin.saveUser();

    });
});
