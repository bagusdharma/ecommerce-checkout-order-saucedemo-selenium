const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('checkout cart', function() {
  this.timeout(30000)
  let driver
  beforeEach(async function() {
    driver = await new Builder().forBrowser('firefox').build()
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('checkout cart', async function() {
    await driver.get("https://www.saucedemo.com/v1/index.html")
    // await driver.manage().window().setRect({ width: 1920, height: 1080 })
    await driver.findElement(By.css("*[data-test=\"username\"]")).click()
    await driver.findElement(By.css("*[data-test=\"username\"]")).sendKeys("standard_user")
    await driver.findElement(By.css("*[data-test=\"password\"]")).click()
    await driver.findElement(By.css("*[data-test=\"password\"]")).sendKeys("secret_sauce")
    await driver.findElement(By.id("login-button")).click()
    assert(await driver.findElement(By.css(".product_label")).getText() == "Products")
    await driver.findElement(By.css(".inventory_item:nth-child(1) > .inventory_item_label")).click()
    await driver.findElement(By.css("#item_4_title_link > .inventory_item_name")).click()
    assert(await driver.findElement(By.css(".inventory_details_name")).getText() == "Sauce Labs Backpack")
    await driver.findElement(By.css(".inventory_details_back_button")).click()
    await driver.findElement(By.css(".inventory_item:nth-child(1) .btn_primary")).click()
    assert(await driver.findElement(By.css(".btn_secondary")).getText() == "REMOVE")
    await driver.findElement(By.css(".svg-inline--fa")).click()
    assert(await driver.findElement(By.css(".subheader")).getText() == "Your Cart")
    await driver.findElement(By.css(".btn_secondary:nth-child(1)")).click()
    await driver.findElement(By.css("#item_0_title_link > .inventory_item_name")).click()
    assert(await driver.findElement(By.css(".inventory_details_name")).getText() == "Sauce Labs Bike Light")
    await driver.findElement(By.css(".btn_primary")).click()
    assert(await driver.findElement(By.css(".btn_secondary")).getText() == "REMOVE")
    await driver.findElement(By.css("path")).click()
    assert(await driver.findElement(By.css(".subheader")).getText() == "Your Cart")
    await driver.findElement(By.linkText("CHECKOUT")).click()
    assert(await driver.findElement(By.css(".subheader")).getText() == "Checkout: Your Information")
    await driver.findElement(By.css("*[data-test=\"firstName\"]")).click()
    await driver.findElement(By.css("*[data-test=\"firstName\"]")).sendKeys("tester")
    await driver.findElement(By.css("*[data-test=\"lastName\"]")).click()
    await driver.findElement(By.css("*[data-test=\"lastName\"]")).sendKeys("swag")
    await driver.findElement(By.css("*[data-test=\"postalCode\"]")).click()
    await driver.findElement(By.css("*[data-test=\"postalCode\"]")).sendKeys("1234567")
    await driver.findElement(By.css(".checkout_info")).click()
    await driver.findElement(By.css(".btn_primary")).click()
    assert(await driver.findElement(By.css(".subheader")).getText() == "Checkout: Overview")
    assert(await driver.findElement(By.css(".summary_value_label:nth-child(4)")).getText() == "FREE PONY EXPRESS DELIVERY!")
    await driver.findElement(By.linkText("FINISH")).click()
    assert(await driver.findElement(By.css(".complete-header")).getText() == "THANK YOU FOR YOUR ORDER")
    await driver.findElement(By.css(".bm-burger-button > button")).click()
    await driver.findElement(By.id("logout_sidebar_link")).click()
  })
})
