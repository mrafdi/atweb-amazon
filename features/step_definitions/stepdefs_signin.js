const { Given, When, Then, AfterAll, setDefaultTimeout } = require('cucumber');
const { Builder, By, Capabilities, until } = require('selenium-webdriver');
const { expect } = require('chai');
const assert = require('assert');

require("chromedriver");
setDefaultTimeout(60 * 1000);

// driver setup
const capabilities = Capabilities.chrome();
capabilities.set('chromeOptions', { "w3c": false });
const driver = new Builder().withCapabilities(capabilities).build();

When(/^I fill the email field with "([^"]*)"$/, async function(email) {
    await driver.findElement({ css: "input[type='email']"}).sendKeys(email);
    await driver.sleep(1000);
});

When(/I uncheck the Ingat saya button$/, async function() {
    await driver.findElement({ css: "span.c-inp__inner-lbl"}).click();
    (await driver).sleep(1000);
});

When(/I click Login button on the popup$/, async function() {
    await driver.sleep(1000);
    let wording = await driver.findElement({css:"form#new_user_session i.c-btn--spinner__icon~span"}).getText();
    await assert.ok(wording.includes("Login"));
    await driver.findElement({ css: "form#new_user_session i.c-btn--spinner__icon"}).click();
    (await driver).sleep(5000);
});

Then(/I can see my profile image on top right corner$/, async function() {
    await driver.sleep(2000);
    await driver.findElement({css:"img.c-avatar__image"});
    await driver.sleep(3000);
});

When(/I click the button labeled "Pesan Sekarang"$/, async function() {
    await driver.sleep(1000);
    let wording = await driver.findElement({css:"div.v-card button.icon-left.v-btn span"}).getText();
    await assert.ok(wording.includes("Order Sekarang"));
    await driver.findElement({ css: "div.v-card button.icon-left.v-btn"}).click();
});

When(/^I fill out the order detail with name "([^"]*)", address "([^"]*)", location "([^"]*)", and phone "([^"]*)"$/, async function(name, address, location, phone) {
    await driver.sleep(1000);
    await driver.findElement({ css: "form div:nth-child(2) div.v-input__slot input"}).sendKeys(name);
    await driver.findElement({ css: "form div:nth-child(3) div.v-input__slot input"}).sendKeys(address);
    await driver.findElement({ css: "form div:nth-child(4) div.v-input__slot input"}).sendKeys(location);
    await driver.sleep(3000); // waiting for the suggestion to appear
    await driver.findElement({ css: "div.v-list-item"}).click();
    await driver.findElement({ css: "form div:nth-child(5) div.v-input__slot input"}).sendKeys(phone);
});

When(/I click the button labeled "Lanjutkan"$/, async function() {
    await driver.sleep(1000);
    let wording = await driver.findElement({css:"div.v-dialog__content.v-dialog__content--active button.icon-left span.v-btn__content"}).getText();
    await assert.ok(wording.includes("Lanjutkan"));
    await driver.findElement({ css: "div.v-dialog__content.v-dialog__content--active button.icon-left"}).click();
});

When(/I choose the first delivery option$/, async function() {
    await driver.sleep(1000);
    await driver.findElement({ css: "div.v-dialog--active button.mt-4:nth-child(2)"}).click();
});

When(/I choose the first payment option$/, async function() {
    await driver.sleep(1000);
    await driver.findElement({ css: "div.v-dialog--active button.mt-4:nth-child(2)"}).click();
});

// code below won't be executed because the step is absence in feature file
// I am not allowed to edit feature file
When(/I choose the first bank option$/, async function() {
    await driver.sleep(1000);
    await driver.findElement({ css: "div.v-dialog--active button.mt-4:nth-child(1)"}).click();
});

// code below will never run
Then(/I should see the button labeled "Kirim Foto Bukti Transfer"$/, async function() {
    await driver.sleep(2000);
    let wording = await driver.findElement({css:"button.primary span.v-btn__content"}).getText();
    await assert.ok(wording.includes("Kirim Bukti Transfer"));
    await driver.sleep(3000);
});

// AfterAll('end', async function () {
//     await driver.quit();
// });