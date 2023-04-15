import { selectors, expected } from './ForgotPasswordTestData'

class ForgotPasswordPage {
  openPage() {
    cy.visit('/my/account/forgot_password')
  }

  clickSendResetLink() {
    cy.get(selectors.sendResetBtn).click()
  }

  clearEmailInputField() {
    cy.get(selectors.emailField).clear()
  }

  typeInEmailField(value) {
    cy.get(selectors.emailField).type(value)
  }

  isResetPasswordTextDisplayed() {
    cy.get(selectors.resetPassword).should('have.text', expected.resetPasswordText)
  }

  isEmailFieldDisplayed() {
    cy.get(selectors.emailField).should('be.visible')
  }

  isSendResetLinkBtnDisplayed() {
    cy.get(selectors.sendResetBtn).should('be.visible')
  }

  isErrorMessageDisplayed() {
    cy.get(selectors.usernameErroeMassage).should('have.text', expected.usernameErroeMassageText)
  }

  errorMessageNotDisplayed() {
    cy.get(selectors.usernameErroeMassage).should('not.have.text', expected.incorrectDataText)
  }

  isUsernameErrorMessageDisplayed() {
    cy.get(selectors.usernameErroeMassage).should('be.visible')
  }
}

export default ForgotPasswordPage
