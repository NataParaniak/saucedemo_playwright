import type { Page, Locator } from '@playwright/test';
import { BaseComponent } from './BaseComponent';

export class HeaderComponent extends BaseComponent {
  readonly burgerMenu: Locator = this.page.locator('#react-burger-menu-btn');
  readonly title: Locator = this.page.locator('.app_logo');
  readonly cartButton: Locator = this.page.locator('.shopping_cart_link');

  constructor(page: Page) {
    super(page);
  }

  async openMenu(): Promise<void> {
    await this.burgerMenu.click();
  }

  async goToCart(): Promise<void> {
    await this.cartButton.click();
  }
}
