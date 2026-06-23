import { LoginPage } from '../pages/LoginPage';
import { test } from '@playwright/test';

test('Verify Logo, Tittle, Url are visible on login page', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.navigate();
  await loginPage.verifyLogoLoginPage();
  await loginPage.verifyTitle();
  await loginPage.verifyUrl();
});

test('Verify username and password fields are visible on login page', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.navigate();
  await loginPage.assertUsernameFieldEnable();
  await loginPage.assertUserPasswordFieldEnable();
});
test('Verify login button are enable on login page', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.navigate();
  await loginPage.isLoginButtonEnabled();
});

test('Verify that the text “Accepted usernames are:” is visible on the login page', async ({
  page,
}) => {
  const loginPage = new LoginPage(page);
  await loginPage.navigate();
  await loginPage.assertHeaderText('Accepted usernames are:');
});
test('Accepted usernames header should not be incorrect', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.navigate();
  await loginPage.assertAcceptedHeaderIsNot('ac');
});

test('Verify Login and password credentials are visible at the bottom of login page', async ({
  page,
}) => {
  const loginPage = new LoginPage(page);
  await loginPage.navigate();
  await loginPage.assertLoginCredentialsVisible();
  await loginPage.assertPasswordCredentialsVisible();
});
