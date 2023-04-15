import LoginPage from '../pages/LoginPage/LoginPage.js'

const loginPage = new LoginPage()

describe('Elements of the Login Page', () => {
  before(() => {
    loginPage.openLoginPage()
  })

  it('should display the Login page upon successful navigation', () => {
    loginPage.isLoginPageDisplayed()
  })

  it('should display the email text field on the Login page', () => {
    loginPage.isEmailInputFieldDisplayed()
  })

  it('should display the password text field on the Login page', () => {
    loginPage.isPaswordTextFIeldDisplayed()
  })
})

describe('Functionality of the Login Page', () => {
  before(() => {
    loginPage.openLoginPage()
  })

  beforeEach(() => {
    loginPage.clearEmailInputField()
    loginPage.clearPasswordInputField()
  })

  it('should display an error message if both email and password fields are left empty on submission', () => {
    loginPage.clickLoginBtn()
    loginPage.isEmailErrorMessageDisplayed()
    loginPage.isPasswordErrorMessageDisplayed()
  })

  it('should make the error message disappear after typing in the email field', () => {
    loginPage.typeInEmailField('hello world')
    loginPage.emailErrorMessageNotDisplayed()
  })

  it('should make the error message disappear after typing in the password field', () => {
    loginPage.typeInPasswordField('123')
    loginPage.passwordErrorMessageNotDisplayed()
  })
})
