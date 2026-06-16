import {LoginPage} from '../pages/LoginPage';
import {test} from '@playwright/test';



test('User cant log in with invalid credentials', async ({page}) => {
    const loginPage=new LoginPage(page);
    await loginPage.navigate()
    await loginPage.login('standard_user', 'abgfd')
    await loginPage.assertInvalidLoginText()
    
});