import { test } from '@playwright/test';
import { expect } from '@playwright/test';
import {userData} from '../data/UserData.js';
import {ExcelReader} from '../utils/ExcelReader.js';
import {PropertyReader} from '../utils/PropertyReader.js';

test('login',async({page})=>{
//fixture: Ready-to-use setup provided by playwright for a test
//browser
//contexts
//page
//const context=await browser.newContext();
//const page=await context.newPage();

//to read the excel file
const excelUserData=ExcelReader.readExcelFile('UserData.xlsx','Sheet1');
console.log(excelUserData);

//to read the properties file
const properties1=PropertyReader.readProperties('./config/global.properties');
console.log(properties1);

//we are fetcing the values from the properties file
await page.goto(`${properties1.BaseURL}`);
//username
//password
//login button click
await page.waitForTimeout(5000);
//we are fetching the values here from the json
await page.locator("#username").fill(`${userData[0].userName}`);
await page.waitForTimeout(5000);
//we are fetching the values here from the excel file
await page.locator("#password").fill(`${excelUserData[0].Password}`);
await page.waitForTimeout(5000);
//await page.locator("[type='submit']").click();
//await page.waitForTimeout(5000);
await page.getByRole("button",{name:"Sign In"}).click();
await page.waitForTimeout(5000);
console.log(await page.title());

});

/*
//Waits :Waits are used to synchronize the test with the applications behaviour
//waits in selenium:implicit,explicit,fluent
//waits in playwright:
//1.Auto waiting
//Auto waits in Playwright are inbuilt waits which waits for the button to become actionable
//2.Assertion waiting
//.toBeHidden();
//.toBeVisible();
//.toHaveText('');
//.toHaveURL('');
//3.Explicit waiting
//waitForTimeout();
//waitForSelector();
//waitForURL();
//waiForLoadState();
//waitForResponse();

//locator vs selector:
//selector: a selector is a pattern used to identify an element
//locator: is a playwright object used to identify a web element 
// and perform actions or assertions on that element

//Different types of locators:
//1.CSS Locator
page.locator("#username");
//2.xpath
//absolute xpath
//relative xpath
page.locator("//input[@id='username']");
//3.Role Locator
page.getByRole("button",{name:"Sign In"});
//4.Text Locator
page.getByText("");
//5.Label Locator
page.getByLabel("");
//6.Placeholder Locator
//7.Test ID Locator

*/
//Assertion
//1.Element is visible
//page.locator('').toBeVisible();

//2.Element is hidden
//page.locator("").toBeHidden();

//3.Element is enabled or disabled
//page.locator("").toBeEnabled();
//page.locator("").toBeDisabled();

//4.Element Contains Text
//.toContainText('');-->partial match.(abcdefgh-->b)
//.toHaveText(');-->exact values

//5.Input has value
//.toHaveValue();

//6.checkbox is checked
//.toBeChecked();

//7.pageTitle
//.toHaveTitle('');

//8.url Assertion
//.toHaveURL('');


//1.to use the array values
//2.to store the data in excel file -->rows&column->username,password
                                                //sagesyntax,abcpassword
//3.to store the data in the properties file-->   global.properties