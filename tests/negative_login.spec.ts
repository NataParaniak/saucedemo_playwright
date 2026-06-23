import { LoginPage } from '../pages/LoginPage';
import { test } from '@playwright/test';
import credentials from '../test-data/data-credentials.json';

test('User cant log in with invalid credentials', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.navigate();
  await loginPage.login(credentials.invalidUser.username, credentials.invalidUser.password);
  await loginPage.assertInvalidLoginText();
});
