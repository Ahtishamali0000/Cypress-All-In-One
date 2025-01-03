/// <reference types="cypress"/>


class LoginPage {

    visit(){
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    }

    getUsernameInput() {
        return cy.get("[Placeholder='Username']");
      }

      getPasswordInput() {
        return cy.get("[Placeholder='Password']");
      }

      getLoginButton() {
        return cy.get("[type='submit']"); 
      }

      getErrorMessage() {
        return cy.get('.oxd-alert-content');
      }

      getEmptyErrorMesg(){
        return cy.get(':nth-child(2) > .oxd-input-group > .oxd-text');
      }

      Logoutbtn(){
        cy.get('.oxd-userdropdown-tab').click();
        cy.contains('Logout').click();

      }

        // Actions
  enterUsername(username) {
    this.getUsernameInput().type(username);
  }

  enterPassword(password) {
    this.getPasswordInput().type(password);
  }

  clickLogin() {
    this.getLoginButton().click();
  }

  login(username, password) {
    this.enterUsername(username);
    this.enterPassword(password);
    this.clickLogin();
  }

  loginEmpty(username, password) {
    if (username !== null && username !== undefined) {
      this.enterUsername(username); // Only type if not empty
    }
  
    if (password !== null && password !== undefined) {
      this.enterPassword(password); // Only type if not empty
    }
  
    this.clickLogin();
  }
  


    // ClickSubmitBtn(){
    //     cy.get(Locator_data.username_locator).type(Locator_data.userData)
    //     cy.get(Locator_data.password_locator).type(Locator_data.userPass)
    //     cy.get(Locator_data.loginbtn_locator).click()
    // }


} export default LoginPage