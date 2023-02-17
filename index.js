const {Builder, By} = require('selenium-webdriver');


async function Tests() {
//launch Browser
   //////////////////// Safari ///////////////////////
    let driver = await new Builder().forBrowser("safari").build()
   /////////////un commet below for chrome //////////////// 
    // const driver = new Builder().forBrowser('chrome').setChromeService(service).build();
// navigate to application
    await driver.get("https://snap.modernemortgage.com/home/mobile-test");
//Test to run
await driver.findElement(By.id("teal-job-tracker-root-stable")).isDisplayed();
//close browser


}

Tests()