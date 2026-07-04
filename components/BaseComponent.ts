import type { Page, Locator } from '@playwright/test';

export abstract class BaseComponent {
  protected root: Locator;
  protected page: Page;

  constructor(page: Page) {
    this.page = page;
    this.root = page.locator('#root');
  }
}
