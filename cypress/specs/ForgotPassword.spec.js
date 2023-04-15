import ForgotPasswordPage from '../pages/ForgotPasswordPage/ForgotPasswordPage.js'

const forgotPasswordPage = new ForgotPasswordPage()

describe('Elements of the Password Page', () => {
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
  before(() => {
    forgotPasswordPage.openPage()
  })

  beforeEach(() => {
    forgotPasswordPage.clearEmailInputField()
  })

  it('should display an error message if the email field is left empty on submission', () => {
    forgotPasswordPage.clickSendResetLink()
    forgotPasswordPage.isErrorMessageDisplayed()
  })

  it('should make the error message disappear when user inputs a data in the email field', () => {
    forgotPasswordPage.typeInEmailField('test')
    forgotPasswordPage.errorMessageNotDisplayed()
  })

  it('should display an error message when an incorrect email is entered', () => {
    forgotPasswordPage.typeInEmailField('test@gcom')
    forgotPasswordPage.clearEmailInputField()
    forgotPasswordPage.isUsernameErrorMessageDisplayed()
  })
})
