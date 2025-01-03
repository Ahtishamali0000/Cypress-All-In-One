import LoginPage from "../../PageObjects/Login_Object";

const loginPage = new LoginPage();

describe('Login Functionality Tests', () => {
  beforeEach(() => {
    cy.visit('/login'); 
  });

  it('Should login successfully with valid credentials', () => {
    cy.fixture('loginData').then((data) => {
      loginPage.login(data.validUser.username, data.validUser.password);
      cy.url().should('include', '/dashboard/index'); 
    });
  });

  it('Should show an error for invalid credentials', () => {
    cy.fixture('loginData').then((data) => {
      loginPage.login(data.invalidUser.username, data.invalidUser.password);
      loginPage.getErrorMessage().should('contain', 'Invalid credentials');
    });
  });

  it('Should show an error when username and password are empty', () => {
    cy.fixture('loginData').then((data) => {
      loginPage.loginEmpty(data.emptyFields.username, data.emptyFields.password);
      loginPage.getEmptyErrorMesg().should('contain', 'Required'); 
    });
  });

  it('Should show an error when only username is empty', () => {
    cy.fixture('loginData').then((data) => {
      loginPage.loginEmpty(data.emptyFields.username, data.validUser.password);
      loginPage.getEmptyErrorMesg().should('contain', 'Required'); 
    });
  });

  it('Should show an error when only password is empty', () => {
    cy.fixture('loginData').then((data) => {
      loginPage.loginEmpty(data.validUser.username, data.emptyFields.password);
      loginPage.getEmptyErrorMesg().should('contain', 'Required'); 
    });
  });



  it('Should redirect to the forgot password page when "Forgot Password" is clicked', () => {
    cy.get('.orangehrm-login-forgot').click(); 
    cy.url().should('include', '/requestPasswordResetCode'); 
  });

  it('Should maintain session after successful login', () => {
    cy.fixture('loginData').then((data) => {
      loginPage.login(data.validUser.username, data.validUser.password);
      cy.url().should('include', '/dashboard'); 

      // Simulate page reload
      cy.reload();
      cy.url().should('include', '/dashboard'); 
    });
  });

  it('Should log out successfully and redirect to the login page', () => {
    cy.fixture('loginData').then((data) => {
      loginPage.login(data.validUser.username, data.validUser.password);
    //   cy.get('#logoutButton').click(); // Replace with the actual logout button selector
    loginPage.Logoutbtn();
    cy.wait(5000)
      cy.url().should('include', '/login');
    cy.wait(5000)

    });
  });
});
