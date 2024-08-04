const { Given, Then, When } = require("@wdio/cucumber-framework");
const Page = require("../pages/page");
const LoginPage = require("../pages/login.page");
const DashboardPage = require("../pages/dashboard.page");

Given(/^I Open Kasir website$/, async () => {
    await Page.open("/");
});

When(/^I Login with valid credentials$/, async() =>{
    await LoginPage.login('raffelfebrian@gmail.com','Kris2698');

});

Then(/^I Should be on the dashboard$/, async() => {
    await DashboardPage.assertDashboardUrl();

});

When(/^$I Login with invalid username/, async() =>{
    await loginPage.login('raffelfebriann@gmail.com','Kris2698');

});

When(/^$I Login with invalid password/, async() =>{
    await loginPage.login('raffelfebriann@gmail.com','Kris26988');
});

Then(/^$I Should be on error message/, async() => {
    await loginPage.assertErrorMessage('Kredensial yang Anda berikan salah');
});