///<reference types='cypress'/>

import LoginPage from "../../PageObjects/Login_Object";
import Leave_Page from "../../PageObjects/Leave_Page";


const leavePage = new Leave_Page();
const loginPage = new LoginPage();
 

describe("",()=>{
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
        leavePage.visitLeave();
    });


    it('Should allow applying for a valid leave',()=>{

        leavePage.ApplyBtn().should('be.visible').click();
        cy.wait(2000); // Wait for 2 seconds

        leavePage.leaveType().click();
        leavePage.leave_CANType().click();
        leavePage.fromDate().click();
        leavePage.ToDate().click();
        leavePage.comentArea();
        leavePage.SaveBtn().click();

        
        


    })






})