import type { Page } from '@playwright/test';

export abstract class BasePage {
  protected page: Page;
  abstract path: string;

  constructor(page: Page) {
    this.page = page;
  }

  async navigate(): Promise<void> {
    await this.page.goto(this.path);
  }
}
