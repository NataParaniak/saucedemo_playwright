import { expect, type Page, type Locator } from '@playwright/test';
import { BasePage } from '../pages/BasePage';

export class LoginPage extends BasePage {
  path = '/';

  readonly usernameInput: Locator = this.page.locator('#user-name');
  readonly passwordInput: Locator = this.page.locator('#password');
  readonly loginBtn: Locator = this.page.locator('#login-button');
  readonly logo: Locator = this.page.locator('.login_logo');
  readonly textHeader: Locator = this.page.getByText('Accepted usernames are:');
  readonly loginCredentials: Locator = this.page.locator('.login_credentials');
  readonly passwordCredentials: Locator = this.page.locator('.login_password');
  readonly messageForLockedUser: Locator = this.page.locator('[data-test="error"]');
  readonly messageInvalidData: Locator = this.page.getByText(
    'Epic sadface: Username and password do not match any user in this service',
  );
  readonly messageForEmptyFields: Locator = this.page.getByText(
    'Epic sadface: Username is required',
  );

  constructor(page: Page) {
    super(page);
  }

  async assertOnLoginPage(): Promise<void> {
    await expect(this.page, 'User is expected to be on the inventory page').toHaveURL('/');
  }

  async verifyTitle(): Promise<void> {
    await expect(this.page, 'Page title should be "Swag Labs"').toHaveTitle('Swag Labs');
  }

  async verifyUrl(): Promise<void> {
    expect(this.page, 'Page url should contain "saucedemo"').toHaveURL(/saucedemo/);
  }

  async login(username: string, password: string): Promise<void> {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginBtn.click();
  }

  async assertUsernameFieldEnable(): Promise<void> {
    await expect(this.usernameInput, 'Field username is visible').toBeEnabled();
  }

  async assertUserPasswordFieldEnable(): Promise<void> {
    await expect(this.passwordInput, 'Field password is visible').toBeEnabled();
  }

  async isLoginButtonEnabled(): Promise<void> {
    await expect(this.loginBtn, 'Login button is enabled and clickable').toBeEnabled();
  }

  async assertHeaderText(expectedText: string): Promise<void> {
    await expect(this.textHeader, 'User is expected to see text on the page').toHaveText(
      expectedText,
    );
  }

  async assertLoginCredentialsVisible(): Promise<void> {
    await expect(
      this.loginCredentials,
      'User is expected to see text about login credentials',
    ).toBeVisible();
  }

  async assertPasswordCredentialsVisible(): Promise<void> {
    await expect(
      this.passwordCredentials,
      'User is expected to see text about password credentials',
    ).toBeVisible();
  }

  async assertAcceptedHeaderIsNot(wrongText: string): Promise<void> {
    await expect(this.textHeader, `Header should NOT contain text: "${wrongText}"`).not.toHaveText(
      wrongText,
    );
  }

  async assertLockedUser(): Promise<void> {
    await expect(
      this.messageForLockedUser,
      'User is expected to stay on the same page and see text about locked User',
    ).toBeVisible();
  }

  async assertInvalidLoginText(): Promise<void> {
    await expect(
      this.messageInvalidData,
      'User is expected to stay on the same page and see text',
    ).toBeVisible();
  }
  async verifyLogoLoginPage(): Promise<void> {
    expect(this.logo, 'Logo should be visible').toBeVisible();
  }
  async verifyEmptyField(): Promise<void> {
    await expect(
      this.messageForEmptyFields,
      'User is expected to stay on the same page and see text "Epic sadface: Username is required"',
    ).toBeVisible();
  }

  async verifyMaskedPasswordAndHaveValue(expectPassword: string): Promise<void> {
    await expect(this.passwordInput, 'Password field should be masked').toHaveAttribute(
      'type',
      'password',
    );
    const password = await this.passwordInput.inputValue();
    expect(password, 'Password value should match the expected password').toBe(expectPassword);
  }
}
