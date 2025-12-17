import { expect, type Locator, type Page } from "@playwright/test";

export class LoginPage {
  readonly page: Page;
  readonly usernameField: Locator;
  readonly pswField: Locator;
  readonly loginBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.usernameField = page.locator("#user-name");
    this.pswField = page.locator('input[data-test="password"]');
    this.loginBtn = page.locator('input[type="submit"]');
  }
}
