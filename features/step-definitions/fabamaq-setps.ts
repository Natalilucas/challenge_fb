
import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect } from '@wdio/globals'
import loginPage from '../pageobjects/login.page';
import RegisterPage from '../pageobjects/register.page';

const registerPage: {[index: string]: any} = {
    registerPage: RegisterPage
}

const userName1 = "natali";
const userEmail1= "natali_l@hotmail.com"
const userPassword1="123456"



//Scenario 1 As a user, I can register an account
Given(" I am on the register page", async()=>{
    //Fiction function to call as i need to register a new user
    await registerPage.open();
    await browser.pause(10000);
    await registerPage.checkFieldsEnabled();
});

When("I fill in the name field with {string}" , async(data:string)=>{
    //fiction function to set name
    await registerPage.setName(data);
});

When("I fill in the email field with {string}", async(data:string)=>{
    //fiction function to set email
    await registerPage.setEmail(data);
});

When("I fill in the password field {string}", async(data:string)=>{
    //fiction function to set password
    await registerPage.setPassword(data);
});

When("I press the button submit to create an account", async () => {
    //fiction function to submit form
    await registerPage.submitForm();
});

Then("I recieve a confirmation email at {string}", async (data) => {
    //fiction function to send a confirmation email
    const confirmation = await registerPage.sendConfirmationEmail(data);
    expect(confirmation).toBe(true);
});

// Scenario 2 As a user, I cannot register an account without a user name
Given("I enter on the register page", async () => {
    //Fiction function to call as i need to register a new user
    await registerPage.open();
    await browser.pause(10000);
    await registerPage.checkFieldsEnabled();
});

When("I fill in the email field with {string}", async (data: string) => {
    //fiction function to set email
    await registerPage.setEmail(data);
});

When("I fill in the password field {string}", async (data: string) => {
    //fiction function to set password
    await registerPage.setPassword(data);
});

When("I press the button submit to create an account", async () => {
    //fiction function to submit form
    await registerPage.submitForm();
});

Then("I must receive an error message {string}", async (errorMessage: string) => {
    //fiction function to get an error message
    const actualErrorMessage = await registerPage.getErrorMessage();
    expect(actualErrorMessage).toEqual(errorMessage);
});

// Scenario 3 As a user, I cannot register an account without an email
Given("I visit on the register page", async () => {
    await registerPage.open();
    await browser.pause(10000);
    await registerPage.checkFieldsEnabled();
});

When("I fill in the name field with {string}", async (data: string) => {
    //fiction function to set email
    await registerPage.setName(data);
});

When("I fill in the password field {string}", async (data: string) => {
    //fiction function to set password
    await registerPage.setPassword(data);
});

When("I press the button submit to create an account", async () => {
    //fiction function to submit form
    await registerPage.submitForm();
});

Then("I must receive an error message {string}", async (errorMessage: string) => {
    //fiction function to get an error message
    const actualErrorMessage = await registerPage.getErrorMessage();
    expect(actualErrorMessage).toEqual(errorMessage);
});

// Scenario 4 As a user, I cannot register an account without a password
Given("I'm on the register page", async () => {
    await registerPage.open();
    await browser.pause(10000);
    await registerPage.checkFieldsEnabled();
});

When("I fill in the name field with {string}", async (data: string) => {
    //fiction function to set email
    await registerPage.setName(data);
});

When("I fill in the email field with {string}", async (data: string) => {
    //fiction function to set password
    await registerPage.setEmail(data);
});

When("I press the button submit to create an account", async () => {
    //fiction function to submit form
    await registerPage.submitForm();
});

Then("I must receive an error message {string}", async (errorMessage: string) => {
    //fiction function to get an error message
    const actualErrorMessage = await registerPage.getErrorMessage();
    expect(actualErrorMessage).toEqual(errorMessage);
});

// Scenario 5 As a user, I cannot register an account with duplicate email
Given("I enter on register page", async () => {
    await registerPage.open();
    await browser.pause(10000);
    await registerPage.checkFieldsEnabled();
});

When("I fill in the name field with {string}", async (data: string) => {
    //fiction function to set email
    await registerPage.setName(data);
});

When("I fill in the email field with a registered email {string}", async (data: string) => {
    //fiction function to set email
    await registerPage.setEmail(data);
});

When("I fill in the password field {string}", async (data: string) => {
    //fiction function to set password
    await registerPage.setPassword(data);
});

When("I press the button submit to create an account", async () => {
    //fiction function to submit form
    await registerPage.submitForm();
});

Then("I must receive an error message {string}", async (errorMessage: string) => {
    //fiction function to get an error message
    const actualErrorMessage = await registerPage.getErrorMessage();
    expect(actualErrorMessage).toEqual(errorMessage);
});

// Scenario 6 As a user, I cannot log in without a registration
Given("I am on the login", async (data: string) => {
    await loginPage.open();
    await browser.pause(10000);
    await loginPage.checkFieldsEnabled();
})

When("I am not logged in", async(data:string) => {
    await loginPage.logout();
})

When("I fill in the login field a non registered name {string}", async (data: string) => {
    //here should have a fucntion to inset username
    await loginPage.login;
});

When("I fill in the login field a non registered password {string}", async (data: string) => {
     //here should have a fucntion to inset password
    await loginPage.login;
});

When("I press the button submit and enter in my account", async () => {
    await loginPage.submit();
});

Then("I must receive an error message {string}", async (errorMessage: string) => {
    const actualErrorMessage = await registerPage.getErrorMessage();
    expect(actualErrorMessage).toEqual(errorMessage);
});

// Scenario 7 As a user, I can log into a registered account
Given("I enter the login page", async (data: string) => {
    await loginPage.open();
    await browser.pause(10000);
    await loginPage.checkFieldsEnabled();
})

When("I am not logged in", async(data:string) => {
    await loginPage.logout();
})

When("I fill in the login field with a registered name and password {string}", async (data: string) => {
    await loginPage.login(userName1, userPassword1);
});

When("I press the button submit and enter in my account", async () => {
    await loginPage.submit();
});

Then("the user should be sucessfully logged in and receive a message {string}", async (sucessMessage: string) => {
    //fiction function to get an error message
    const sucessLog = await registerPage.sucessMessage();
    expect(sucessMessage).toEqual(sucessLog);
});

// Scenario 8 As a user, I cannot log in with an incorrect password
Given("I open the login page", async (data: string) => {
    await loginPage.open();
    await browser.pause(10000);
    await loginPage.checkFieldsEnabled();
})

When("I am not logged in", async(data:string) => {
    //just in case is logged
    await loginPage.logout();
})

When("I fill in the name field with {string}", async (data: string) => {
    //fiction function to set email
    await loginPage.inputUsername;
});

When("I fill in with an incorrect password {string}", async (data: string) => {
    //fiction function to set password
    await loginPage.inputPassword;
});

When("I press the button submit and enter in my account", async () => {
    //fiction function submit a request
    await loginPage.submit();
});

Then("I must receive an error message {string}", async (errorMessage: string) => {
    //fiction function to get an error message
    const actualErrorMessage = await registerPage.getErrorMessage();
    expect(actualErrorMessage).toEqual(errorMessage);
});