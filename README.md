## INTURN CodeceptJS Demo Framework
An automation testing framework for web application using CodeceptJS


### Project structure
```
.
├── DEMOFRAMEWORK
│   ├── feature
│   │   ├── home_page.feature       (contains the BDD test scenarios)
│   │   └── ...
│   ├── output
│   │   ├── htmlReport              (contains the reports and screenshots after the execution)
│   │   └── ...
│   ├── pages                       (contains the page objects)
│   │   ├── homePage.js
│   │   ├── ...
│   │   
│   ├── step_definitions            (contains the code implementaion of feature files)
│   │   ├── home_page_steps.js
│   │   └── ...
│   │
│   └── test                        (contains non-bdd test scripts)
│   │   ├── home_page_test.js
│   │   └── ...
│   │
│   │
│   ├── codecept.conf.js            (the configuration file to manage the flow of execution)
│   │   
│   ├── package.json                (the heart of the project)
│   │   
│   └── .....


```

### Prerequisites
- NodeJS
- Java 8 (for Allure Report)

### Installation
1. Clone the repo https://github.com/manuchehri1/inturndemoframework.git
```
git clone 
```
2. Install NPM packages
```
$ npm install
```
### Running Tests
The default helper is Playwright.
But can be used  any of this Puppeteer, WebdriverIO, TestCafe...

```
$ npm test                  --> will run all bdd and non-bdd tests
$ npm run codeceptjs:bdd    --> will run only bdd tests
$ npm run codeceptjs:test   --> will run only non-bdd tests
 
```
### Report

1. Allure 
```
$ npm test  ---> this command will generate the allure html report

```
To access the Allure HTML report after the execution run below command.
It will open the report in the allure remote server 
To access report locally you have to install allure globally in your local machine
```
allure serve output

```

2. Mochawesome
```
$ npm run test:mochawesome  ---> this command will generate the Mochawsome html report under output/htmlReport directory

```

## Parallel Execution

Run tests in parallel with 3 workers:

```
npx codeceptjs run-workers 3
```


NOTE: It can be improved and can be much more dynamic, just takes time !!!