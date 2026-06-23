import { expect, type Page } from '@playwright/test';
import { BasePage } from '../pages/BasePage';
import { LoginFormComponent } from '../components/LoginFormComponent';

export class LoginPage extends BasePage {
  path = '/';
  readonly form: LoginFormComponent;

  constructor(page: Page) {
    super(page);
    this.form = new LoginFormComponent(page);
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
    await this.form.usernameInput.fill(username);
    await this.form.passwordInput.fill(password);
    await this.form.loginBtn.click();
  }

  async assertUsernameFieldEnable(): Promise<void> {
    await expect(this.form.usernameInput, 'Field username is visible').toBeEnabled();
  }

  async assertUserPasswordFieldEnable(): Promise<void> {
    await expect(this.form.passwordInput, 'Field password is visible').toBeEnabled();
  }

  async isLoginButtonEnabled(): Promise<void> {
    await expect(this.form.loginBtn, ' Login button is enable and clickable').toBeEnabled();
  }

  async assertHeaderText(expectedText: string): Promise<void> {
    await expect(this.form.textHeader, 'User is expected to see text on the page').toHaveText(
      expectedText,
    );
  }

  async assertLoginCredentialsVisible(): Promise<void> {
    await expect(
      this.form.loginCredentials,
      'User is expected to see text about login credentials',
    ).toBeVisible();
  }

  async assertPasswordCredentialsVisible(): Promise<void> {
    await expect(
      this.form.passwordCredentials,
      'User is expected to see text about password credentials',
    ).toBeVisible();
  }

  async assertAcceptedHeaderIsNot(wrongText: string): Promise<void> {
    await expect(
      this.form.textHeader,
      `Header should NOT contain text: "${wrongText}"`,
    ).not.toHaveText(wrongText);
  }

  async assertVerifyLockedUser(): Promise<void> {
    await expect(
      this.form.messageForLockedUser,
      'User is expected to stay on the same page and see text about locked User',
    ).toBeVisible();
  }

  async assertInvalidLoginText(): Promise<void> {
    await expect(
      this.form.messageInvalidData,
      'User is expected to stay on the same page and see text',
    ).toBeVisible();
  }
  async verifyLogoLoginPage(): Promise<void> {
    expect(this.form.logo, 'Logo should be visible').toBeVisible();
  }
}
