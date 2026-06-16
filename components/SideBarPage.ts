import { BasePage } from '../pages/BasePage';
import { type Locator, type Page } from '@playwright/test';

export class SideBarPage extends BasePage {
  readonly burgerMenu: Locator = this.page.locator('#react-burger-menu-btn');
  readonly logOutBtn: Locator = this.page.locator('#logout_sidebar_link');

  constructor(page: Page) {
    super(page);
  }

  async logOut(): Promise<void> {
    await this.burgerMenu.click();
    await this.logOutBtn.click();
  }
}
