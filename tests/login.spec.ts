import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { test } from '@playwright/test';
import credentials from '../test-data/credentials.json';

test.describe('Positive scenario', () => {
  test('User can log in with valid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);
    await loginPage.navigate();
    await loginPage.login(credentials.standardUser.username, credentials.standardUser.password);
    await inventoryPage.assertOnInventoryPage();
  });

  test('Logout from application', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);
    await loginPage.navigate();
    await loginPage.login(credentials.standardUser.username, credentials.standardUser.password);
    await inventoryPage.assertOnInventoryPage();
    await inventoryPage.header.openMenu();
    await inventoryPage.sideBar.logOut();
    await loginPage.assertOnLoginPage();
  });

  test('Check if the user is locked', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigate();
    await loginPage.login(credentials.lockedUser.username, credentials.lockedUser.password);
    await loginPage.loginBtn.click();
    await loginPage.assertLockedUser();
  });
  test('Login with empty username and password', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigate();
    await loginPage.loginBtn.click();
    await loginPage.verifyEmptyField();
  });

  test('Password field is masked', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigate();
    await loginPage.login(credentials.lockedUser.username, credentials.lockedUser.password);
    await loginPage.verifyMaskedPasswordAndHaveValue(credentials.standardUser.password);
  });
});

test.describe('Negative scenario', () => {
  test('User cant log in with invalid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigate();
    await loginPage.login(credentials.invalidUser.username, credentials.invalidUser.password);
    await loginPage.assertInvalidLoginText();
  });
});
