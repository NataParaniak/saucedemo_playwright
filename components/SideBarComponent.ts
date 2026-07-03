import type { Locator } from '@playwright/test';
import { BaseComponent } from './BaseComponent';

export class SideBarComponent extends BaseComponent {
  readonly logOutBtn: Locator = this.root.locator('#logout_sidebar_link');

  constructor(root: Locator) {
    super(root);
  }

  async logOut(): Promise<void> {
    await this.logOutBtn.click();
  }
}
