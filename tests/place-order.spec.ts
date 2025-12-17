import { test, expect } from "@playwright/test";

test.describe("place order test suite", () => {
  test.beforeEach(async ({ page }) => {
    console.log("before each test s-a rulat");
    await page.goto("https://www.saucedemo.com/");
  });

  test("place order test @smoke", async ({ page }) => {
    console.log("suntem in test");
    await page.locator('[data-test="username"]').fill("standard_user");
    await page.locator('[data-test="username"]').press("Tab");
    await page.locator('[data-test="password"]').fill("secret_sauce");
    await page.locator('[data-test="login-button"]').click();
    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();

    await page.locator('[data-test="shopping-cart-link"]').click();
    await expect(page.locator('[data-test="continue-shopping"]')).toBeVisible();
    await expect(page.locator('[data-test="checkout"]')).toContainText(
      "Checkout",
    );
    await page.locator('[data-test="checkout"]').click();
    await page.locator('[data-test="firstName"]').fill("john");
    await page.locator('[data-test="firstName"]').press("Tab");

    await page.locator('[data-test="lastName"]').fill("doe");
    await page.locator('[data-test="lastName"]').press("Tab");
    await page.locator('[data-test="postalCode"]').fill("2352322");
    await page.locator('[data-test="continue"]').click();
    await page.locator('[data-test="finish"]').click();
    await expect(page.locator('[data-test="complete-header"]')).toContainText(
      "Thank you for your order!",
    );
    await expect(page.locator('[data-test="back-to-products"]')).toBeVisible();
    await expect(page.locator('[data-test="complete-text"]')).toContainText(
      "Your order has been dispatched, and will arrive just as fast as the pony can get there!",
    );
  });
});
