const { Builder, By, until } = require("selenium-webdriver");

async function Tests() {
  //////////////////launch Browser//////////////////
            ///////// Safari /////////////
  let driver = await new Builder().forBrowser("safari").build();
  /////////////uncommet below for chrome ////////////////
  // const driver = new Builder().forBrowser('chrome').setChromeService(service).build();
  
  // navigate to application
  await driver.get("https://snap.modernemortgage.com/home/mobile-test");
  //Test to run
  ////////////////////Test 1 ///////////////////
  await driver
    .findElement(
      By.xpath("/html/body/div[2]/div/div[2]/div/div/div[3]/div[3]/span[2]/a")
    )
    .isDisplayed();

    ////////////////////Test 2////////////////////
        //Click the link to activate the alert
await driver.findElement(By.linkText('Apply Now')).click();

// // Wait for the alert to be displayed
await driver.wait(until.alertIsPresent());

// // Store the alert in a variable
// let alert = await driver.switchTo().alert();

// //Type your message
// await alert.sendKeys("Selenium");

// //Press the OK button
// await alert.accept();

  //close browser
}

Tests();
