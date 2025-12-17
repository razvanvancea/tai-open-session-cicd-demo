import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/login.page";
import { log } from "node:console";

test("invalid login with wrong password @rv", async ({ page }) => {
  const loginPage = new LoginPage(page);
  await page.goto("https://www.saucedemo.com/");
  await loginPage.usernameField.fill("standard_user");
  await loginPage.pswField.fill("parolagresita");
  await loginPage.loginBtn.click();
  await expect(page.locator('h3[data-test="error"]')).toContainText(
    "Epic sadface: Username and password do not match any user in this service",
  );
});

test("invalid login with wrong password 2 @rv2", async ({ page }) => {
  const loginPage = new LoginPage(page);
  await page.goto("https://www.saucedemo.com/");
  await loginPage.usernameField.fill("standard_user");
  await loginPage.pswField.fill("parolagresita");
  await loginPage.loginBtn.click();
  await expect(page.locator('h3[data-test="error"]')).toContainText(
    "Epic sadface: Username and password do not match any user in this service",
  );
});
test("invalid login with wrong password 3 @rv", async ({ page }) => {
  const loginPage = new LoginPage(page);
  await page.goto("https://www.saucedemo.com/");
  await loginPage.usernameField.fill("standard_user");
  await loginPage.pswField.fill("parolagresita");
  await loginPage.loginBtn.click();
  await expect(page.locator('h3[data-test="error"]')).toContainText(
    "Epic sadface: Username and password do not match any user in this service",
  );
});
