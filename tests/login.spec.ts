import {LoginPage} from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { SideBarPage } from '../components/SideBarPage';
import {test} from '@playwright/test';



test('User can log in with valid credentials', async ({page}) => {
    const loginPage=new LoginPage(page);
    const inventoryPage=new InventoryPage(page);
    await loginPage.navigate()
    await loginPage.login('standard_user', 'secret_sauce')
    await inventoryPage.assertOnInventoryPage();
});

test('Verify Logo, Tittle, Url are visible on login page', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigate()
    await loginPage.verifyLogoLoginPage();
    await loginPage.verifyTitle();
    await loginPage.verifyUrl();
});

test('Verify username and password fields are visible on login page', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigate()
    await loginPage.assertUsernameFieldVisible();
    await loginPage.assertUserPasswordFieldVisible();
});
test('Verify login button are enable on login page', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigate()
    await loginPage.isLoginButtonEnabled();
});

test('Verify that the text “Accepted usernames are:” is visible on the login page', async ({
    page,
}) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigate()
    await loginPage.assertHeaderText('Accepted usernames are:');
});
test('Accepted usernames header should not be incorrect', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigate()
    await loginPage.assertAcceptedHeaderIsNot('ac');
});

test('Verify Login and password credentials are visible at the bottom of login page', async ({ page,}) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigate()
    await loginPage.assertLoginCredentialsVisible();
    await loginPage.assertPasswordCredentialsVisible();
});

test('Logout from application', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const sideBarPage = new SideBarPage(page);
    const inventoryPage=new InventoryPage(page);
     await loginPage.navigate()
    await loginPage.login('standard_user', 'secret_sauce')
    await inventoryPage.assertOnInventoryPage();

    await sideBarPage.logOut();
    await loginPage.assertOnLoginPage();
});

    test('Check if the user is blocked', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.navigate()
        await loginPage.loginBtn.click();
        await loginPage.assertVerifyLockedUser();
    });