# Cypress All-in-One Testing Framework 🚀

## Overview
This is an All-in-One Cypress Testing Framework that covers End-to-End (E2E) UI Testing, API Testing, and Behavior-Driven Development (BDD) with Cucumber. The purpose of this project is to provide a complete, maintainable, and scalable solution for automated testing using Cypress.
Whether you're a beginner looking to start with Cypress or a professional seeking a comprehensive framework, this repository offers everything you need to get started with automated testing.

## Table of Contents
- [Overview](#overview)
- [Technologies Used](#technologies-used)
- [Features](#features)
- [Setup & Installation](#setup--installation)
- [How to Run Tests](#how-to-run-tests)
- [Contributing](#contributing)
- [License](#license)

## Technologies Used 💻
- **Cypress** – End-to-End Testing Framework
- **Cucumber** – Behavior-Driven Development (BDD)
- **JavaScript** – Test Scripting Language
- **Chai & Mocha** – Assertion & Test Framework
- **API Testing** – Using Cypress for Backend Testing

## Features 🌟
- **End-to-End UI Testing**: Automated tests for various UI pages (Login, Checkout, Cart, etc.)
- **API Testing**: Test APIs using Cypress for both GET and POST requests.
- **Cucumber (BDD)**: Write readable feature files and map them to step definitions in JavaScript.
- **Page Object Model (POM)**: Organize test scripts using POM for better scalability and maintainability.
- **Parallel Execution**: Efficient test execution to save time.
- **Custom Commands**: Reusable functions to reduce repetitive code.

## Setup & Installation 🛠️
To get started with this project, follow these steps:

### Prerequisites:
- Node.js (LTS version recommended)
- npm or yarn

### Steps:
1. Clone this repository:
    ```bash
    git clone https://github.com/Ahtishamali0000/Cypress-All-In-One.git
    ```

2. Navigate to the project folder:
    ```bash
    cd Cypress-All-In-One
    ```

3. Install the dependencies:
    ```bash
    npm install
    ```
    or if you're using yarn:
    ```bash
    yarn install
    ```

## How to Run Tests 🏃‍♂️
Once the dependencies are installed, you can start running the tests.

### To run UI tests (End-to-End tests):
    ```bash
    npx cypress open
    ```
    This command will open the Cypress Test Runner. You can then select a test to run.

### To run API tests:
    ```bash
npx cypress run --spec "cypress/e2e/API Testing/*"
    ```

### To run Cucumber tests:
Make sure you have the Cucumber preprocessor installed and then run:
    ```bash
npx cypress run --spec "cypress/e2e/cucumber/Test/*.feature"
    ```

### Run all tests:
To run all the tests (UI, API, and BDD):
    ```bash
    npx cypress run
    ```

## Contributing 🤝
Contributions are welcome! If you'd like to contribute to this project, follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature-name`)
3. Make your changes and commit them (`git commit -am 'Add new feature'`)
4. Push to your forked repository (`git push origin feature-name`)
5. Create a pull request
