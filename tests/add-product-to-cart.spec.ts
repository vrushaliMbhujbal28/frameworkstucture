import { test, expect } from '@playwright/test';

test.describe('Add a product to the cart', () => {
  test('Add Sauce Labs Backpack', async ({ page }) => {
    // 1. Navigate to https://www.saucedemo.com/
    await page.goto('https://www.saucedemo.com/');

    // 2. Fill the Username field with standard_user
    await page.locator('[data-test="username"]').fill('standard_user');

    // 3. Fill the Password field with secret_sauce
    await page.locator('[data-test="password"]').fill('secret_sauce');

    // 4. Click the Login button
    await page.locator('[data-test="login-button"]').click();

    // 5. Verify the Products heading is visible
    await expect(page.locator('[data-test="title"]')).toBeVisible();

    // 6. Click the Add to cart button for the product Sauce Labs Backpack
    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();

    // 7. Verify the shopping cart badge shows 1
    await expect(page.locator('[data-test="shopping-cart-badge"]')).toHaveText('1');

    // 8. Click the shopping cart link
    await page.locator('[data-test="shopping-cart-link"]').click();

    // 9. Verify the cart contains Sauce Labs Backpack
    await expect(page.locator('[data-test="item-4-title-link"]')).toHaveText('Sauce Labs Backpack');
  });
});
