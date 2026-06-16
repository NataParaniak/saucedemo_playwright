import { BasePage } from "./BasePage";
import { type Page, expect } from '@playwright/test';

export class InventoryPage extends BasePage{
    readonly path='/inventory.html'
    readonly page:Page;

    constructor(page:Page){
    super(page);
    this.page=page;
    }

      async navigate(): Promise<void> {
        await super.navigate(this.path)
      }


          async assertOnInventoryPage(): Promise<void> {
        await expect(this.page, 'User is expected to be on the inventory page').toHaveURL(/.*inventory\.html/);
    }
      }

