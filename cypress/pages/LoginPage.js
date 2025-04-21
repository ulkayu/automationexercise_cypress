class LoginPage {
  elements = {
    emailInput: () => cy.get('input[data-qa="login-email"]'),
    passwordInput: () => cy.get('input[data-qa="login-password"]'),
    loginButton: () => cy.get('button[data-qa="login-button"]'),
    logoutLink: () => cy.get('ul.navbar-nav li a[href="/logout"]'),
  };

  visitLoginPage() {
    cy.visit('/login');
  }

  fillEmail(email) {
    this.elements.emailInput().type(email);
  }

  fillPassword(password) {
    this.elements.passwordInput().type(password);
  }

  submit() {
    this.elements.loginButton().click();
  }

  verifyLoggedIn() {
    this.elements.logoutLink()
      .should('be.visible')
      .and('contain', 'Logout');
  }
}

export default new LoginPage();
