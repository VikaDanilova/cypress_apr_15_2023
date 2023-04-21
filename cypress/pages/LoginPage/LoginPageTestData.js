export const selectors = {
  page: '.reg-and-login',
  emailInputField: '#user_username',
  passwordInputField: '#user_password',
  loginBtn: '#sign-in-button',
  signUpBtn: '.reg-and-login__switch-page__link',
  forgotPasswordLink: '.reg-and-login__lnk--forgot-pwd',
  keepMeLoggedInCheckBox: '#remember_me',
  usernameError: '#user_username-error',
  userPasswordError: '#user_password-error',
}

export const expected = {
  emailErrorMassage: 'Enter a valid email address or username',
  passwordErrorMassage: 'Enter your password',
}
