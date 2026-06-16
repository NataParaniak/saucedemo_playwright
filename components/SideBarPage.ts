import { BasePage } from '../pages/BasePage';
import { type Locator, type Page } from '@playwright/test';

export class SideBarPage extends BasePage {
  readonly burgerMenu: Locator;
  readonly logOutBtn: Locator;

  constructor(page: Page) {
    super(page);
    this.burgerMenu = page.locator('#react-burger-menu-btn');
    this.logOutBtn = page.locator('#logout_sidebar_link');
  }

  async logOut(): Promise<void> {
    await this.burgerMenu.click();
    await this.logOutBtn.click();
  }
}
