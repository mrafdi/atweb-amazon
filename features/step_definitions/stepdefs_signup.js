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

Given(/I open Amazon website$/, async function() {
    await driver.get('https://amazon.com/');
    let wording = await driver.findElement({css:"h2.as-title-block-left span"}).getText();
    await assert.ok(wording.includes("Discover Amazon"));
    await driver.sleep(5000);
});

When(/I click the Sign in button$/, async function() {
    await driver.findElement({ css: "#nav-link-accountList .nav-line-1"}).click();
    await driver.sleep(1000);
});

Then(/I should see the Sign in page$/, async function() {
    // await driver.sleep(2000);
    let wording = await driver.findElement({css:"h1.a-spacing-small"}).getText();
    await assert.ok(wording.includes("Sign-In"));
    await driver.sleep(3000);
});

When(/I click the Create Your Amazon Account button in Sign in page$/, async function() {
    // let wording = await driver.findElement({css:"#createAccountSubmit"}).getText();
    // await assert.ok(wording.includes("Create your Amazon account"));
    await driver.findElement({css:"#legalTextRow"}).click();
    await driver.findElement({css:"span#auth-create-account-link"}).click();
    await driver.sleep(1000);
});

Then(/I should see the Sign up page$/, async function() {
    // await driver.sleep(2000);
    let wording = await driver.findElement({css:"h1.a-spacing-small"}).getText();
    await assert.ok(wording.includes("Create account"));
    await driver.sleep(3000);
});

When(/^I fill the name field with "([^"]*)", email field with "([^"]*)", password field with "([^"]*)", and re-enter password with "([^"]*)"$/, 
async function(name, email, password, password2) {
    await driver.findElement({ css: "input[name='customerName']"}).sendKeys(name);
    await driver.findElement({ css: "input[name='email']"}).sendKeys(email);
    await driver.findElement({ css: "input[name='password']"}).sendKeys(password);
    await driver.findElement({ css: "input[name='passwordCheck']"}).sendKeys(password2);
    await driver.sleep(1000);
});

Then(/I can see error message on email field$/, async function() {
    await driver.sleep(2000);
    let wording = await driver.findElement({css:"#auth-email-invalid-email-alert .a-alert-content"}).getText();
    await assert.ok(wording.includes("Enter a valid email address"));
    await driver.sleep(3000);
});

When(/I click Create Your Amazon Account button$/, async function() {
    await driver.sleep(1000);
    let wording = await driver.findElement({css:"span.a-button-text"}).getText();
    await assert.ok(wording.includes("Create your Amazon account"));
    await driver.findElement({ css: "span.a-button"}).click();
    (await driver).sleep(5000);
});

Then(/I can see Verify email address page$/, async function() {
    await driver.sleep(2000);
    let wording = await driver.findElement({css:"h1"}).getText();
    await assert.ok(wording.includes("Verify email address"));
    await driver.sleep(3000);
});

When(/^I input the OTP field with "([^"]*)"$/, async function(otp) {
    await driver.findElement({ css: "input[name='code']"}).sendKeys(otp);
    await driver.sleep(1000);
});

Then(/^I can see that I am logged in as "([^"]*)"$/, async function(name) {
    let wording = await driver.findElement({css:"#nav-link-accountList span.nav-line-1"}).getText();
    await assert.ok(wording.includes("Hello, " + name));
});

AfterAll('end', async function () {
    await driver.quit();
});