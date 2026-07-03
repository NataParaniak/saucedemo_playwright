import { BaseComponent } from './BaseComponent';
import type { Locator } from '@playwright/test';

export class InventoryListComponent extends BaseComponent {
  readonly sortDropDownMenu: Locator = this.root.locator('.product_sort_container');

  constructor(root: Locator) {
    super(root);
  }
}
