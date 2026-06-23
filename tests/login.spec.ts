import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { SideBarPage } from '../components/SideBarPage';
import { test } from '@playwright/test';
import credentials from '../test-data/data-credentials.json';
import { LoginFormComponent } from '../components/LoginFormComponent';

test('User can log in with valid credentials', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);
  await loginPage.navigate();
  await loginPage.login(credentials.standardUser.username, credentials.standardUser.password);
  await inventoryPage.assertOnInventoryPage();
});

test('Logout from application', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const sideBarPage = new SideBarPage(page);
  const inventoryPage = new InventoryPage(page);
  await loginPage.navigate();
  await loginPage.login(credentials.standardUser.username, credentials.standardUser.password);
  await inventoryPage.assertOnInventoryPage();

  await sideBarPage.logOut();
  await loginPage.assertOnLoginPage();
});

test('Check if the user is blocked', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const form = new LoginFormComponent(page);
  await loginPage.navigate();
  await form.loginBtn.click();
  await loginPage.assertVerifyLockedUser();
});
