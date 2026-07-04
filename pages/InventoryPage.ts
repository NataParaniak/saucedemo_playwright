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
    this.header = new HeaderComponent(page);
    this.sideBar = new SideBarComponent(page);
  }
  async assertOnInventoryPage(): Promise<void> {
    await expect(this.page, 'User is expected to be on the inventory page').toHaveURL(
      /.*inventory\.html/,
    );
  }
}
