
import { expect } from '@playwright/test';
import { test } from "../fixture/fixture";

const user = {
  email: "standard_user",
  password : "secret_sauce",
  firstName : "Mark",
  lastName : "Smith",
  postCode : "12345"
}

test.beforeEach(async ({loginPage}) => {
  await loginPage.navigate();
})

test('Successful Login with Valid Credentials', async ({loginPage, inventoryPage}) => {
  await loginPage.performLogin(user.email, user.password);
  await expect(inventoryPage.pageTitle).toBeVisible();
})

test('Unuccessful Login with Invalid Password', async ({loginPage}) => {
  await loginPage.performLogin(user.email, Date.now() + user.password);
  await expect(loginPage.error ).toBeVisible();
})

test('Unuccessful Login with Invalid Name', async ({loginPage}) => {
  await loginPage.performLogin(Date.now() + user.email,  user.password);  
  await expect(loginPage.error).toBeVisible();
})

test('User can buy a product. Happy-pass test', async ({loginPage, checkOutInfo, inventoryPage, cartPage, checkOutOverview, checkOutComplete}) => {
  await loginPage.performLogin(user.email, user.password);
  await inventoryPage.backpackProductAddToCardBtn.click();
  await inventoryPage.shoppingCartLink.click();
  await cartPage.checkoutBtn.click();
  await checkOutInfo.firstName.fill(user.firstName);
  await checkOutInfo.lastName.fill(user.lastName);
  await checkOutInfo.postCode.fill(user.postCode);
  await checkOutInfo.continueBtn.click();
  await checkOutOverview.finishBtn.click();
  await expect(checkOutComplete.completeHeader).toMatchAriaSnapshot(`- heading "Thank you for your order!" [level=2]`);
})
