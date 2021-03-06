<p>
  <img src="https://cloud.githubusercontent.com/assets/1268976/20607953/d7ae489c-b24a-11e6-9cc4-91c6c74c5e88.png" height="50px" />
</p>

[![Cypress.io](https://img.shields.io/badge/tested%20with-Cypress-04C38E.svg)](https://www.cypress.io/)

## **Contents**

- [**Introduction**](#introduction)
- [**Why Cypress**](#Why-Cypress)
- [**Who Can Benefit**](#Who-Can-Benefit)
- [**Selenium vs Cypress**](#Selenium-vs-Cypress)
- [**Features**](#Features)
- [**Prerequisites**](#Prerequisites)
- [**Installation**](#Installation)
- [**Directory Structure**](#Directory-Structure)
- [**Browser Run vs Headless Run**](#Browser-Run-vs-Headless-Run)
- [**First Run (Tests in Cypress)**](#First-Run)
- [**Intellisense**](#Intellisense)
- [**Collections (describe) vs Individual Tests (it)**](#Collections-vs-Individual-Tests)
- [**Command Chaining**](#Command-Chaining)
- [**Built-In Assertions**](#Built-In-Assertions)
- [**Test Failures**](#Test-Failures)
- [**Custom Commands**](#Custom-Commands)
- [**Hooks**](#Hooks)
- [**Configuration**](#Configuration)
- [**.then() command**](#then-command)
- [**Aliases**](#Aliases)
- [**Headless Run**](#Headless-Run-Running-tests-through-command-line)
- [**Screenshots and Videos**](#Screenshots-and-Videos)
- [**File Upload Plugin**](#File-Upload-Plugin)
- [**Reporting**](#Reporting)
- [**Cucumber (Behaviour Driven Approach to Testing)**](#Cucumber-Behaviour-Driven-Approach-to-Testing)
- [**CORS**](#CORS)
- [**Trade-offs**](#Trade-offs)
- [**API Testing**](#API-Testing)
- [**Page Object Model**](#Page-Object-Model)
- [**Working with Files (Fixtures)**](#Working-with-Files-Fixtures)
- [**Windows VDI Specific Issue**](#Windows-VDI-Specific-Issue)
- [**Cypress Dashboad**](https://dashboard.cypress.io/)
- [**Next Steps**](#Next-Steps)
- [**Bonus**](#Bonus)

## **Introduction**

- Front End Testing Tool
- Open Source
- Gained Popularity Really Quick
- First Commit on June 5th, 2014
- Cypress = Mocha + Chai.js
  - Mocha - Testing Framework
  - Chai.js - Assertion Library
- Best For
  - Unit Testing
  - Integration Testing
  - End to End Testing
  - Cross Browser Testing

**Note:** _In Short, You Can Test Anything That Runs in the Browser_

## **Why Cypress**

- Easy, Fast and Reliable
- Approximately 2 Million Downloads/Week
- Amazing Community

## **Who Can Benefit**

- Developers
- Testers/QA
- Stakeholders [Specific Aspects]

## **Selenium vs Cypress**

- [Selenium vs Cypress - Browserstack](https://www.browserstack.com/guide/cypress-vs-selenium)
- [Selenium vs Cypress - Cuelogic](https://www.cuelogic.com/blog/cypress-vs-selenium)
- [Selenium vs Cypress - LambdaTest](https://www.lambdatest.com/blog/cypress-vs-selenium-comparison/)

## **Features**

1. Time Travel

   - Screenshots at Each Step
   - No configuration required

1. Real Time Reloads

   - no nodemon/webpack/watch sort of commands

1. Consistent Results

   - Flake Free (No Flaky Tests)

1. Debuggability

   - Readable Errors & Stack Traces
   - No More Guesswork on Failed Tests (Use of Assertions)

1. Automatic Waiting

   - Automaticaly waits for commands, asssertions before moving on
   - No need to add wait/timeouts/sleep unless required specifically

1. Network Traffic Control

   - Easy control over stubs/test edge cases without involving the server
   - Stub netowrk traffic however you like

## **Prerequisites**

- Node.js + npm + npx
- VS Code
- Cucumber(Gherkin Support) Extension
- Good to Have
  - Basic JavaScript Experience
  - ES6 Syntax (Arrow Functions)

## **Installation**

```shell
npm init -y
sudo npm install cypress
npx cypress run
```

## **Directory Structure**

```
/root/cypress/fixtures
    static files
    external data
    read/write files
    files for upload

/root/cypress/integration
    test files
    feature files (gherkin syntax)

/root/cypress/plugins
    load plugins

/root/cypress/reports
    contains report files
    json reports
    html reports

/root/cypress/screenshots
    failed test screenshots

/root/cypress/support
    /root/cypress/support/commands.js
        custom command
        overwrite existing commands

    /root/cypress/support/index.js
        global configurations (to modify cypress behaviour)
        loads automatically before all test files

/root/cypress/videos
    test videos ran during headless run

/root/cypress.json
    cypress related configurations
        baseUrl
        port
        env configurations
```

## **Browser Run vs Headless Run**

1. Browser Run

```shell
npx cypress open
```

2. Headless Run - Running tests through command line

```shell
npx cypress run
```

## **First Run**

- Example Tests
- Snapshots (Before & After)

## **Intellisense**

- Intellisense - /// Directive

```javascript
/// <reference types="Cypress" />
```

- Global Intellisense

`jsconfig.json`

```json
{
  "include": ["./node_modules/cypress", "cypress/**/*.js"]
}
```

## **Collections vs Individual Tests**

Mocha Test Framework

- describe (collection of tests)
- it (individual tests)

## **Command Chaining**

## **Built-In Assertions**

- cy.visit - expects content with 200 response
- cy.get - expects the element to be in DOM
- .contains - expects content
- .click - expects the element to be in actionable state

## **Test Failures**

## **Custom Commands**

Add commands in `/support/commands.js`

- Overwrite Existing Commands
- Create Custom Commands
- Executed Before Any Other Tests

## **Hooks**

Provided by Mocha

```js
before(); // run once before all the tests in a describe
beforeEach(); // run before each test in a describe - can be used to prevent domino effect
after(); // run once after all the tests in a describe
afterEach(); // run after each test in a describe
```

Note: Cypress clears out the state of browser in between tests

Example

- before() - won't run any tests if included in a file when the test it contains fails

**[Read more about these Hooks...](https://filiphric.com/cypress-basics-before-beforeeach-after-aftereach)**

## **Configuration**

`/root/cypress.json`

- default directories for tests, screenshots, videos
- browser settings
- timeout settings
- viewport settings
- test retries
- and a lot more...

**Example configurations for default directories**

```json
{
  "fixturesFolder": "test/cypress/fixtures",
  "integrationFolder": "test/cypress/integration",
  "pluginsFile": "test/cypress/plugins/index.js",
  "screenshotsFolder": "test/cypress/screenshots",
  "videosFolder": "test/cypress/videos",
  "supportFile": "test/cypress/support/index.js"
}
```

Visit [Cypress Configuration Page](https://docs.cypress.io/guides/references/configuration#Options) for more info

## **.then() command**

- Debugging
- Extract Values
- Comparisons

## **Aliases**

- Reuse DOM elements
- Overcomes limitation of .then() command
- .then() expects input then and there (works with objects)
- Aliases help you use output later on

```javascript
.as('aliasName)
cy.get('@aliasName).first().click()
```

## **Headless Run**

- Running commands through command line
- Runs in electron browser by default during a headless run
- [Supported List of browsers](https://docs.cypress.io/guides/guides/launching-browsers#Browsers)
- it.only() / describe.only()
- it.skip() / describe.skip()

Note: Hooks always get executed

**`CLI COMMANDS`**

**1. Run all spec/test files of the project**

```shell
npx cypress run
```

**2. Run all spec/test files of a particular directory**

```shell
npx cypress run --spec "cypress/integration/examples/*.js"
```

**3. Run single test file**

```
npx cypress run --spec "cypress/integration/examples/actions.spec.js"
```

**4. Run or skip a particular test of a spec/test file - use only/skip with it/decribe**

```javascript
it.only("GET - read", () => {
  cy.request("/employees").then((response) => {
    expect(response).to.have.property("status", 200);
    expect(response.body).to.not.be.null;
    expect(response.body.data).to.have.length(24);
  });
});
```

```javascript
it.skip("GET - read", () => {
  cy.request("/employees").then((response) => {
    expect(response).to.have.property("status", 200);
    expect(response.body).to.not.be.null;
    expect(response.body.data).to.have.length(24);
  });
});
```

**5. Run test in a specific browser**

```
npx cypress run --spec "cypress/integration/examples/actions.spec.js" --browser chrome
```

**Headless Run Result (single test)**

<p align="center">
  <img alt="Headless Run Summary - Single Test" src="assets/individual-test-summary.png" width="75%" height="75%" />
</p>

**Headless Run Result (all tests)**

<p align="center">
  <img alt="Headless Run Summary - All Tests" src="assets/headless-run-summary2.png" width="75%" height="75%" />
</p>

## **Screenshots and Videos**

- Video for tests run through headless run
- Screenshots of failed tests only

## **File Upload Plugin**

Visit [Cypress File Upload Plugin Page](https://github.com/abramenal/cypress-file-upload)

## **Reporting**

- No fancy reports by Cypress
- Built on Mocha, so use Mochawesome
- Isolated Test Report Files
- Packages to be Installed
- Generate HTML reports (chart.js)
- Pretest/posttest hooks - package.json

1. [Install Mocha](https://www.npmjs.com/package/mocha)

```shell
npm install mocha --save-dev
```

2. [Install cypress-multi-reporters](https://www.npmjs.com/package/cypress-multi-reporters)

```shell
npm install cypress-multi-reporters --save-dev
```

3. [Install mochawesome](https://www.npmjs.com/package/mochawesome)

```shell
npm install mochawesome --save-dev
```

4. [Install mochawesome-merge](https://www.npmjs.com/package/mochawesome-merge)

```shell
npm install mochawesome-merge --save-dev
```

5. [Install mochawesome-report-generator](https://www.npmjs.com/package/mochawesome-report-generator)

```shell
npm install mochawesome-report-generator --save-dev
```

**`Single Command Installation`**

```shell
npm install --save-dev mocha cypress-multi-reporters mochawesome mochawesome-merge mochawesome-report-generator
```

`cypress.json`

```json
"reporter": "cypress-multi-reporters",
    "reporterOptions": {
        "reporterEnabled": "mochawesome",
        "mochawesomeReporterOptions": {
            "reportDir": "cypress/reports/mocha",
            "quite": true,
            "overwrite": false,
            "html": false,
            "json": true
        }
    }
```

`package.json (windows)`

```json
"scripts": {
    "clean:reports": "rmdir /S /Q cypress\\reports && mkdir cypress\\reports && mkdir cypress\\reports\\mochareports",
    "pretest": "npm run clean:reports",
    "scripts": "cypress run",
    "combine-reports": "mochawesome-merge cypress/reports/mocha/*.json > cypress/reports/mochareports/report.json",
    "generate-report": "marge cypress/reports/mochareports/report.json -f report -o cypress/reports/mochareports",
    "posttest": "npm run combine-reports && npm run generate-report",
    "test" : "npm run scripts || npm run posttest"
}
```

`package.json (mac)`

```json
"scripts": {
    "clean:reports": "rm -rf cypress/reports && mkdir cypress/reports && mkdir cypress/reports/mochareports",
    "pretest": "npm run clean:reports",
    "scripts": "cypress run",
    "combine-reports": "mochawesome-merge cypress/reports/mocha/*.json > cypress/reports/mochareports/report.json",
    "generate-report": "marge cypress/reports/mochareports/report.json -f report -o cypress/reports/mochareports",
    "posttest": "npm run combine-reports && npm run generate-report",
    "test": "npm run scripts || npm run posttest"
  },
```

## **Cucumber (Behaviour Driven Approach to Testing)**

**What is Behaviour-Driven Development**

BDD is a way for software teams to work that closes the gap between business people and technical people.<br/>
**[Read more about BDD...](https://cucumber.io/docs/bdd/)**

**What is Gherkin Syntax**

Gherkin uses a set of special keywords to give structure and meaning to executable specifications. Each keyword is translated to many spoken languages; in this reference we???ll use English.<br/>
**[Read more about Gherkin Syntax...](https://cucumber.io/docs/gherkin/reference/)**

**Cucumber Integration Steps**

1. Install Cucumber.js

```shell
npm install --save-dev cypress-cucumber-preprocessor
```

2. Bind Cucumber Preprocessor Event to File

`/cypress/plugins/index.js`

```javascript
const cucumber = require("cypress-cucumber-preprocessor").default;

module.exports = (on, config) => {
  on("file:preprocessor", cucumber());
};
```

3. Add Support for .feature files

`/root/cypress.json`

```json
"testFiles": "**/*.{feature,features}"
```

4. Update package.json - features files as default

`/root/package.json`

```json
"cypress-cucumber-preprocessor": {
  "nonGlobalStepDefinitions": true
}
```

- Feature File [Gherkin Sytax] `/cypress/integration/firstTest.feature`
- Step Definition Directory `/cypress/integration/firstTest`
- Step Definition File `/cypress/integration/firstTest/firstTest.spec.js`

**Features**

- Parameters (Reusable Functions)
- Data Tables
- Tags
  - @smoke
  - @focus

**Example Commands**

```shell
npx cypress-tags run -e TAGS='@smoke'
npx cypress-tags run -e TAGS='@focus'
npx cypress-tags run -e TAGS='not @smoke'
npx cypress-tags run -e TAGS='not @smoke'
npx cypress-tags run -e TAGS='@smoke and not @ui'
```

- Cucumber Gherkin VS Code Extension (Gherkin Keyword Highlighting)

## **CORS**

[Resolving CORS Issue](https://docs.cypress.io/guides/references/trade-offs.html#Same-origin)

## **Trade-offs**

[Cypress Trade-Offs](https://docs.cypress.io/guides/references/trade-offs/)

## **API Testing**

- http://dummy.restapiexample.com/
- Expected vs Yielded Values

## **Page Object Model**

- Duplicate Element Scenario (too many tests)
- Elements Aggregated on a Per Page Basis
- Creating Page Objects

**Files**

`/cypress/integration/pageObjects/login.js`

`/cypress/integration/mytests/pom.spec.ts`

## **Working with Files (Fixtures)**

- Static Data (files, images, read/write operations)
- `/fixtures/userLoginDetails.json`
- readFile vs fixture (2 key differences)
  - root directory
  - file priority order

## **Windows VDI Specific Issue**

#### Steps to resolve Cypress related timeout/proxy errors in Windows VDI

**1. Run the following command in terminal. It should open your .npmrc file in notepad`**

```shell
npm config edit
```

**2. Add the following to your .npmrc file opened in the previous step or replace any existing proxy variables with the following 3 lines`**

Note: Replace <VDI-ID> with your VDI ID/Network ID, <VDI-PASSWORD> with your VDI password, <PROXY-ADDRESS> with the proxy address of your organization, and <PORT> with the given port.`

```shell
proxy=http://<VDI-ID>:<VDI-PASSWORD>@<PROXY-ADDRESS>:<PORT>/

set HTTP_PROXY=http://<VDI-ID>:<VDI-PASSWORD>@<PROXY-ADDRESS>:<PORT>

set HTTPS_PROXY=https://<VDI-ID>:<VDI-PASSWORD>@<PROXY-ADDRESS>:<PORT>
```

**3. Remove /node_modules from the directory where cypress is installed. For content-pages repo, this is /content-pages/e2e/node_modules directory**

**4. Run the following commands in your terminal**

```shell
npm cache clean --force
cypress cache clear
```

**5. Do a fresh npm install in the directory where cypress is installed**

`/content-pages/e2e/`

```shell
npm install
```

**6. Open the following file in your node_modules where cypress is installed**

`/content-pages/e2e/node_modules/cypress/lib/tasks/verify.js`

Search for VERIFY_TEST_RUNNER_TIMEOUT variable which is set to 30000 (default value).
Change it to 100000 (increase this value if you still get timeout errors after all the steps)
Save the file

**7. Make sure your application is running before running Cypress. Usually it's**

```shell
npm run start
```

**8. Open a new terminal tab and verify your cypress installation with the following command**

```shell
cypress verify
```

It should show something like this depending on your version

:heavy_check_mark: Verified Cypress! /Users/<user>/Library/Caches/Cypress/<your-cypress-version>/Cypress.app

**9. Open Cypress (depending on the script name in package.json). In this case it's cy:open in package.json. So, run**

```shell
npm run cy:open
```

This should run Cypress without any errors.

(Go to Step 6 and increase the value if it still gives timeout errors)

## **Cypress Dashboard**

- [Go to Cypress Dashboard](https://dashboard.cypress.io)
- [Pricing - Cypress Dashboard](https://www.cypress.io/pricing/)

## **Next Steps**

1. Example Tests by Cypress
1. [Cypress's Official Repository](https://github.com/cypress-io)
1. [Example App 1](https://github.com/cypress-io/cypress-realworld-app)
1. [Example App 2](https://github.com/cypress-io/cypress-example-kitchensink)
1. [Example Recipes](https://github.com/cypress-io/cypress-example-recipes)

## **References**

- [Cypress Website](https://www.cypress.io/)
- [Cypress - NPM Package](https://www.npmjs.com/package/cypress)
- [Cypress - Github](https://github.com/cypress-io/cypress)
- [Introduction Video](https://vimeo.com/237115455)
- [Configuration Options](https://docs.cypress.io/guides/references/configuration#Options)
- [List of Supported Browsers](https://docs.cypress.io/guides/guides/launching-browsers.html#Browsers)
- [Trade-Offs](https://docs.cypress.io/guides/references/trade-offs/)
- [CORS - Same-Origin](https://docs.cypress.io/guides/references/trade-offs.html#Same-origin)
- [Plugins Page](https://docs.cypress.io/plugins/)
- [Plugin - Cypress File Upload](https://github.com/abramenal/cypress-file-upload)
- [Plugin - Cypress Cucumber Preprocessor](https://github.com/TheBrainFamily/cypress-cucumber-preprocessor)
- [Fixtures - File Priority Order](https://docs.cypress.io/api/commands/fixture#Validation)
