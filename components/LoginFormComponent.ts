import type { Page, Locator } from '@playwright/test';

export class LoginFormComponent {
  constructor(private page: Page) {
    this.page = page;
  }

  get usernameInput(): Locator {
    return this.page.locator('#user-name');
  }

  get passwordInput(): Locator {
    return this.page.locator('#password');
  }

  get loginBtn(): Locator {
    return this.page.locator('#login-button');
  }

  get logo(): Locator {
    return this.page.locator('.login_logo');
  }
  get textHeader(): Locator {
    return this.page.getByText('Accepted usernames are:');
  }
  get loginCredentials(): Locator {
    return this.page.locator('.login_credentials');
  }
  get passwordCredentials(): Locator {
    return this.page.locator('.login_password');
  }
  get messageForLockedUser(): Locator {
    return this.page.locator('[data-test="error"]');
  }
  get messageInvalidData(): Locator {
    return this.page.getByText(
      'Epic sadface: Username and password do not match any user in this service',
    );
  }
}
