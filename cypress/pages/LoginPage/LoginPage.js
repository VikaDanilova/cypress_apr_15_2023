import { selectors, expected } from './LoginPageTestData'

class LoginPage {
  openLoginPage() {
    cy.visit('/my/account/login')
  }
  clearEmailInputField() {
    cy.get(selectors.emailInputField).clear()
  }
  clearPasswordInputField() {
    cy.get(selectors.passwordInputField).clear()
  }
  clickLoginBtn() {
    cy.get(selectors.loginBtn).click()
  }
  typeInEmailField(value) {
    cy.get(selectors.emailInputField).type(value)
  }
  typeInPasswordField(value) {
    cy.get(selectors.passwordInputField).type(value)
  }

  isLoginPageDisplayed() {
    cy.get(selectors.page).should('be.visible')
  }

  isEmailInputFieldDisplayed() {
    cy.get(selectors.emailInputField).should('be.visible')
  }

  isPaswordTextFIeldDisplayed() {
    cy.get(selectors.passwordInputField).should('be.visible')
  }

  isEmailErrorMessageDisplayed() {
    cy.get(selectors.usernameError).should('have.text', expected.emailErrorMassage)
  }

  isPasswordErrorMessageDisplayed() {
    cy.get(selectors.userPasswordError).should('have.text', expected.passwordErrorMassage)
  }

  emailErrorMessageNotDisplayed() {
    cy.get(selectors.usernameError).should('not.have.text', expected.emailErrorMassage)
  }

  passwordErrorMessageNotDisplayed() {
    cy.get(selectors.userPasswordError).should('not.have.text', expected.passwordErrorMassage)
  }
}

export default LoginPage
