import type { Locator } from '@playwright/test';
import { BaseComponent } from './BaseComponent';

export class HeaderComponent extends BaseComponent {
  readonly burgerMenu: Locator = this.root.locator('#react-burger-menu-btn');
  readonly title: Locator = this.root.locator('.app_logo');
  readonly cartButton: Locator = this.root.locator('.shopping_cart_link');

  constructor(root: Locator) {
    super(root);
  }

  async openMenu(): Promise<void> {
    await this.burgerMenu.click();
  }

  async goToCart(): Promise<void> {
    await this.cartButton.click();
  }
}
