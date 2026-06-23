import { type Locator, type Page } from '@playwright/test';

export class SideBarPage {
  readonly page: Page;
  readonly burgerMenu: Locator;
  readonly logOutBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.burgerMenu = this.page.locator('#react-burger-menu-btn');
    this.logOutBtn = this.page.locator('#logout_sidebar_link');
  }

  async logOut(): Promise<void> {
    await this.burgerMenu.click();
    await this.logOutBtn.click();
  }
}
