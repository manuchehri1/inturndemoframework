const { I } = inject();
const assert = require('assert');
const homePage = require('../pages/homePage.js')

// Add in your custom step files

Given('I am on the Google Home page', () => {
  I.amOnPage('https://www.google.com')
});

Then('The Google Search button should have value of {string}', async (expectedText) => {
  let actual = await I.grabValueFrom(homePage.googleSearchBtn)
  let expected = "Google Search";
    assert.equal(actual, expectedText);
    console.log(actual)
});

Then("The I'm Feeling Lucky button should have value of {string}", async (expectedText) => {
  let actual = await I.grabValueFrom(homePage.iAmLuckyBtn)
  let expected = "I'm Feeling Lucky";
  assert.equal(actual, expectedText, "[message]");
  console.log(actual)
});

When('I refresh the page', () => {
  I.refreshPage();
});

Then('The page title should be {string}', (titleValue) => {
  I.seeInTitle(titleValue)
});



When('I enter {string} to the search box', (str) => {
  I.fillField(homePage.searchField,str)
});

When('I push the ENTER key', () => {
  I.pressKey("Enter")
 
});

Then('I should see {string} in the page title', (java) => {
  I.seeInTitle(java)
});

Then('I should see {string} in the page', (text) => {
  I.see(text)
});



Then('The word {string} should be visible on the page', (about) => {
  I.see(about)
});
