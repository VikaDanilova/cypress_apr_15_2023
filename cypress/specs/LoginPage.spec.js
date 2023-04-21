import LoginPage from '../pages/LoginPage/LoginPage.js'

const loginPage = new LoginPage()

describe('Elements of the Login Page', () => {
  // This `before` hook opens the login page before running any tests.
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
  // This `before` hook opens the login page before running any tests.
  before(() => {
    loginPage.openLoginPage()
  })
  // This `beforeEach` hook clears the email and password input fields on the login page before each test.
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
    loginPage.typeInEmailField(Cypress.env().INCORRECT_DATA_IN_EMAIL_FIELD)
    loginPage.emailErrorMessageNotDisplayed()
  })

  it('should make the error message disappear after typing in the password field', () => {
    loginPage.typeInPasswordField(Cypress.env().INCORRECT_DATA_IN_PASSWORD_FIELD)
    loginPage.passwordErrorMessageNotDisplayed()
  })
  //  This test case is skipped because it's not currently working as expected.
  //  It should check for error messages after submitting incorrect data for both email and password fields,
  //  but currently it doesn't display the correct messages due to reCaptcha appear.
  //  TODO: Fix this test case in a real project.
  it.skip('should display an error message after submitting incorrect data for both email and password fields', () => {
    cy.login(Cypress.env().INCORRECT_DATA_IN_EMAIL_FIELD, Cypress.env().INCORRECT_DATA_IN_PASSWORD_FIELD)
    loginPage.emailErrorMessageNotDisplayed()
    loginPage.passwordErrorMessageNotDisplayed()
  })
})
