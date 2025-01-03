class Leave_Page{

    visitLeave(){
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/leave/viewLeaveList')
    }

    ApplyBtn(){
        return cy.get(".oxd-topbar-body-nav-tab").contains('Apply')
    }

    leaveType(){
        return cy.get(".oxd-select-text-input")
    }

    leave_CANType(){
        return cy.get('.oxd-select-dropdown > :nth-child(2)')
    }

    fromDate(){
        return cy.get('input[placeholder="yyyy-dd-mm"]').first().type('2024-10-12'); // Example if multiple inputs share the same placeholder
    }

    ToDate(){
        return cy.get('input[placeholder="yyyy-dd-mm"]').eq(1).type('2024-11-12'); // Example if multiple inputs share the same placeholder
    }

    comentArea(){
        cy.get('.oxd-textarea').type('This is my 1st Comment');
    }

    SaveBtn(){
        return  cy.get('button[type="submit"].oxd-button');

    }






} export default Leave_Page;