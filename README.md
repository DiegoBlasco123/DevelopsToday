# Project Name

This project uses [Playwright](https://playwright.dev/) for end-to-end testing. Below are instructions for setting up Playwright, installing dependencies, and running tests.

## Prerequisites

- [Node.js](https://nodejs.org/) (version 12 or higher)
- [npm](https://www.npmjs.com/) (usually included with Node.js)

## Installation

1. Clone the repository and navigate to the project folder:

    ```bash
    git clone https://github.com/DiegoBlasco123/DevelopsToday
    cd <project-folder>
    ```

2. Initialize Playwright: 

    ```bash
    npm init playwright@latest
    ```

3. Install the necessary dependencies:

    ```bash
    npm install
    ```

4. Install Playwright:

    ```bash
    npx playwright install
    ```

    This command will download the browsers required by Playwright.

## Running Tests

To execute all the tests in the project, run the following command:

```bash
npx playwright test
