import { type Locator,type Page, expect } from '@playwright/test';
import {BasePage} from '../pages/BasePage';



export class LoginPage extends BasePage{
  readonly path='/';
   readonly usernameInput:Locator;
   readonly passwordInput:Locator;
   readonly loginBtn:Locator;
   readonly logo: Locator;
   readonly textHeader:Locator;
   readonly loginCredentials:Locator;
   readonly passwordCredentials: Locator;
  

  constructor(page:Page) {
  super(page);
  this.usernameInput = page.locator('#user-name');
  this.passwordInput = page.locator('#password');
  this.loginBtn = page.locator('#login-button');
  this.logo=page.locator('.login_logo');
  this.textHeader=page.getByText('Accepted usernames are:')
  this.loginCredentials=page.locator('.login_credentials')
  this.passwordCredentials=page.locator('.login_password')
  }

  async navigate(): Promise<void> {
        await super.navigate(this.path);
    }
     async assertOnLoginPage(): Promise<void> {
        await expect(this.page, 'User is expected to be on the inventory page').toHaveURL('/');
    }
    async verifyLogoLoginPage(): Promise<void>{
      expect(this.logo, 'Logo should be visible').toBeVisible()
    }

       async verifyTitle(): Promise<void> {
       await expect(this.page, 'Page title should contain "Swag"').toHaveTitle('Swag Labs');
    }

     async verifyUrl(): Promise<void> {
        expect(this.page, 'Page url should contain "saucedemo"').toHaveURL(/saucedemo/);
    }


  async login(username:string, password:string) :Promise<void>{
    await this.usernameInput.fill(username)
    await this.passwordInput.fill(password);
    await this.loginBtn.click();
  }

    async assertUsernameFieldVisible(): Promise<void> {
        await expect(this.usernameInput, 'Field username is visible').toBeVisible();
    }

    async assertUserPasswordFieldVisible(): Promise<void> {
        await expect(this.passwordInput, 'Field password is visible').toBeVisible();
    }

    async isLoginButtonEnabled(): Promise<void> {
        await expect(this.loginBtn, ' Login button is enable and clickable').toBeEnabled();
    }


     async assertHeaderText(expectedText: string): Promise<void> {
        await expect(this.textHeader, 'User is expected to see text on the page').toHaveText(expectedText,);
    }

              async assertLoginCredentialsVisible(): Promise<void> {
        await expect(this.loginCredentials).toBeEnabled();
    }

         async assertPasswordCredentialsVisible(): Promise<void> {
        await expect(this.passwordCredentials).toBeEnabled();
    }

   
    async assertAcceptedHeaderIsNot(wrongText: string): Promise<void> {
        await expect(this.textHeader).not.toHaveText(wrongText);
    }

    async assertVerifyLockedUser(): Promise<void> {
        await expect(this.page.getByText('Epic sadface:'),'User is expected to stay on the same page and see text',
        ).toBeVisible();
    }

    async assertInvalidLoginText(): Promise<void>{
        await expect(this.page.getByText('Epic sadface: Username and password do not match any user in this service')).toBeVisible();
    }

  
    }
