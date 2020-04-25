const { Given, When, Then, AfterAll, setDefaultTimeout } = require('cucumber');
const { Builder, By, Capabilities, until } = require('selenium-webdriver');
const { expect } = require('chai');
const assert = require('assert');
require('dotenv').config()

require("chromedriver");
setDefaultTimeout(60 * 1000);

// driver setup
const capabilities = Capabilities.chrome();
capabilities.set('chromeOptions', { "w3c": false });
const driver = new Builder().withCapabilities(capabilities).build();

// When(/^I fill the email field with valid email$/, async function() {
//     await driver.findElement({css:"input[name='email']"}).sendKeys(process.env.AMAZON_EMAIL);
//     await driver.sleep(1000);
// });

// When(/^I fill the email field with unregistered email "([^"]*)"$/, async function(email) {
//     await driver.findElement({css:"input[name='email']"}).sendKeys(email);
//     await driver.sleep(1000);
// });

// Then(/I can see error message in Sign in page that the email address not found$/, async function() {
//     await driver.sleep(2000);
//     let wordingHead = await driver.findElement({css:"div.a-box-inner h4"}).getText();
//     let wordingBody = await driver.findElement({css:"div.a-box-inner span.a-list-item"}).getText();
//     await assert.ok(wordingHead.includes("There was a problem"));
//     await assert.ok(wordingBody.includes("We cannot find an account with that email address"));
//     await driver.sleep(3000);
// });

// When(/I click Continue button on sign in page$/, async function() {
//     await driver.sleep(1000);
//     let wording = await driver.findElement({css:"input#continue~span"}).getText();
//     await assert.ok(wording.includes("Login"));
//     await driver.findElement({ css: "input#continue"}).click();
//     (await driver).sleep(3000);
// });

// Then(/I should see the Sign in input password page$/, async function() {
//     // await driver.sleep(2000);
//     let wording = await driver.findElement({css:"div.a-row>span"}).getText();
//     await assert.ok(wording.includes(process.env.AMAZON_EMAIL));
// });

// When(/^I fill the password field with valid password$/, async function() {
//     await driver.findElement({ css: "input[type='password']"}).sendKeys(process.env.AMAZON_PASSWORD);
//     await driver.sleep(1000);
// });

// When(/I click Sign In button on Sign in page$/, async function() {
//     await driver.sleep(1000);
//     let wording = await driver.findElement({css:"input#signInSubmit~span"}).getText();
//     await assert.ok(wording.includes("Sign-In"));
//     await driver.findElement({ css: "input#signInSubmit"}).click();
//     (await driver).sleep(5000);
// });

// Then(/I can see that I am logged in to my account$/, async function() {
//     await driver.sleep(2000);
//     let wording = await (await driver.findElement({css:"#nav-link-accountList .nav-line-1"})).getText();
//     await assert.ok(wording.includes("Hello, "+process.env.AMAZON_FIRST_NAME));
//     await driver.sleep(3000);
// });

// AfterAll('end', async function () {
//     await driver.quit();
// });