const assert = require('assert');
const homePage = require('../pages/homePage.js')

Feature('Google Home Page');

Before(async ({ I }) => {
    I.amOnPage('https://www.google.com')
  });

Scenario('Validating text inside the "Google Search" button', async ({ I }) => {
    I.seeInTitle('Google')
    let actual = await I.grabValueFrom(homePage.googleSearchBtn)
    let expected = "Google Search";
    assert.equal(actual, expected);
    console.log(actual)

});

Scenario("Validating text inside the 'I'm Feeling Lucky' button", async ({ I }) => {
    I.seeInTitle('Google')
    let actual = await I.grabValueFrom(homePage.iAmLuckyBtn)
    let expected = "I'm Feeling Lucky";
    assert.equal(actual, expected, "[message]");
    console.log(actual)

});

Scenario('Validating page title', ({ I }) => {
    I.seeInTitle('Google')
    homePage.search("Java")
    I.seeInTitle('Java')
    I.click('Images')

});

Scenario('Validating the search functionality', ({ I }) => {
    homePage.search("Java")
    I.seeInTitle('Java')
    I.see('Java | Oracle')
    I.click('Images')
    I.dontSee('Java | Oracle')

});



Scenario('Validating text in the bottom of the page ', ({ I }) => {
    I.seeInTitle('Google')
    I.see('Advertising',{xpath: '/html/body/div[1]/div[5]/div'})

});
