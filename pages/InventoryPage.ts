import { BasePage } from './BasePage';
import { expect } from '@playwright/test';

export class InventoryPage extends BasePage {
  path = '/inventory.html';
  //  readonly page: Page;

  //   constructor(page: Page) {
  //     super(page);
  //     this.page = page;
  //   }

  async assertOnInventoryPage(): Promise<void> {
    await expect(this.page, 'User is expected to be on the inventory page').toHaveURL(
      /.*inventory\.html/,
    );
  }
}
