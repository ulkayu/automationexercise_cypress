# 🧪 Cypress E2E Tests

This project contains end-to-end UI tests using [Cypress](https://docs.cypress.io/).

## 📦 Installation

1. Clone the repository and install dependencies:

```bash
npm install
```

2. Install Cypress globally (optional):

```bash
npm install -g cypress
```

---

## 🚀 Running Tests

### ✅ Run in interactive mode (GUI):

```bash
npx cypress open
```

This opens Cypress Test Runner where you can choose and run tests visually.

Currently, the project includes one E2E test: `E2EPurchaseFlow.cy.js`. 
To run test please add a real login/password to `cypress/fixtures/creds.json` file

---

### 🤖 Run in headless mode (CLI):

```bash
npx cypress run
```

This runs all tests in the terminal without opening a browser window.

---

## 📊 HTML Report (Mochawesome)

1. After running tests and generating the report, the final HTML report will be located at:

```bash
cypress/reports/index.html

```

---

## 📁 Project Structure

```
cypress/
  ├── e2e/               # Test files
  ├── fixtures/          # Test data (JSON)
  ├── pages/             # Page Object Model
  ├── support/           # Commands and helpers
  └── reports/           # Mochawesome output
```

---

## 🔧 Planned Improvements

1. Add Allure reporter for advanced reporting
2. Add Dockerfile for Cypress configuration
3. Add GitHub Actions workflow to run tests on push/PR

---
