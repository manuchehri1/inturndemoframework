exports.config = {
  tests: './test/*_test.js',
  output: './output',
  helpers: {
    Playwright: {
      url: 'http://localhost',
      show: true,
      browser: 'chromium',
      waitForTimeout: 5000
    },
    Mochawesome: {
      
    }
  },
  gherkin: {
    features: './features/*.feature',
    steps: [
            './step_definitions/home_page_steps.js'
          ]
  },
  include: {
    I: './steps_file.js',
    homePage: './pages/homePage.js'
  },
  bootstrap: null,
  mocha: {
    "reporterOptions": {
      "reportDir": "./output/htmlReport"
  }
  },
  name: 'inturn_demo_framework',
  plugins: {
    pauseOnFail: {},
    retryFailedStep: {
      enabled: true
    },
    tryTo: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: true
    },
    allure: {
      enabled: true
    }
  }
}