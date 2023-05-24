# E2E Tests

## Test Framework used:
Cypress with Typescript

## Test Run Instructions:
- Install all dependencies from `package.json` by running `yarn install`
- Start the web app by running `yarn start` in terminal. It should start on port 3000 as that's where the redirect URI is configured in the spotify dev account added to this project.
- Open another instance of terminal and run `npm run cy-test` to start execution of the E2E tests in a headed chrome browser
- On test failure screenshots and videos will be added under `/cypress/screenshots` and `/cypress/videos` folders respectively

## Test folder structure (newly added files):
- src/tests/E2ETests/cypress/e2e/pages - containing page methods and locators 
- src/tests/E2ETests/cypress/e2e/tests/CriticalPathTests.ts - containing E2E tests for all critical paths defined under /documents/critical-path-definition.md
- cypress.config.js - contaning configs for e2e tests
- .env - containing client id and client secret of spotify dev account

## Modified files
- src/components - some files have been updated with ids for web elements to help write stable automated e2e tests
- src/pages - ome files have been updated with ids for web elements to help write stable automated e2e tests


# Unit Tests

## Test Framework used:
React testing library with Jest

## Test Run Instructions:
Run the tests using command `npm test`

## Test folder structure (newly added files):
- /src/Error.test.tsx - containing 1 unit test for verifying `Error.tsx` component is rendered properly
- jest.config.js - containing config file for running jest command for unit testing
- babel.config.js - Babel is a toolchain that is mainly used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript in current and older browsers or environments

# Improvements
All the proposed improvements are added under `documents/improvement-suggestions.md`