import ForgotPasswordPage from '../pages/ForgotPasswordPage/ForgotPasswordPage.js'

const forgotPasswordPage = new ForgotPasswordPage()

describe('Elements of the Password Page', () => {
  // This `before` hook opens the forgot password page before running any tests.
  before(() => {
    forgotPasswordPage.openPage()
  })

  it('should display the reset password option on the password page', () => {
    forgotPasswordPage.isResetPasswordTextDisplayed()
  })

  it('should display the email text field on the password page', () => {
    forgotPasswordPage.isEmailFieldDisplayed()
  })

  it('should display the send reset link button on the password page', () => {
    forgotPasswordPage.isSendResetLinkBtnDisplayed()
  })
})

describe('Functionality of the Password Page', () => {
  // This `before` hook opens the forgot password page before running any tests.
  before(() => {
    forgotPasswordPage.openPage()
  })

  // This `beforeEach` hook clears the email input field on the login page before each test.
  beforeEach(() => {
    forgotPasswordPage.clearEmailInputField()
  })

  it('should display an error message if the email field is left empty on submission', () => {
    forgotPasswordPage.clickSendResetLink()
    forgotPasswordPage.isErrorMessageDisplayed()
  })

  it('should make the error message disappear when user inputs a data in the email field', () => {
    forgotPasswordPage.typeInEmailField(Cypress.env().INCORRECT_DATA_IN_EMAIL_FIELD)
    forgotPasswordPage.errorMessageNotDisplayed()
  })

  it('should display an error message when an incorrect email is entered', () => {
    forgotPasswordPage.typeInEmailField(Cypress.env().INCORRECT_EMAIL)
    forgotPasswordPage.clearEmailInputField()
    forgotPasswordPage.isUsernameErrorMessageDisplayed()
  })
})
