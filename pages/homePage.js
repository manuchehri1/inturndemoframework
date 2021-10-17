const { I } = inject();

class homePage {

  constructor() {
    // setting locators
    this.searchField = "input[name='q']";
    this.googleSearchBtn = "(//*[@class='gNO89b'])[2]";
    this.iAmLuckyBtn = '//*[@id="gbqfbb"]';
  }

  // introducing methods
  search(objToSearch) {
    I.fillField(this.searchField, objToSearch);
    I.pressKey("Enter")
  }

}

module.exports = new homePage();
module.exports.homePage = homePage;
