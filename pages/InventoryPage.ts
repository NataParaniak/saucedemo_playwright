import { BasePage } from './BasePage';
import { expect, type Page } from '@playwright/test';
import { SideBarComponent } from '../components/SideBarComponent';
import { HeaderComponent } from '../components/HeaderComponent';
export class InventoryPage extends BasePage {
  path = '/inventory.html';
  readonly header: HeaderComponent;
  readonly sideBar: SideBarComponent;

  constructor(page: Page) {
    super(page);
    this.header = new HeaderComponent(this.page);
    this.sideBar = new SideBarComponent(this.page);
  }
  async assertOnInventoryPage(): Promise<void> {
    await expect(this.page, 'User is expected to be on the inventory page').toHaveURL(
      /.*inventory\.html/,
    );
  }
}
