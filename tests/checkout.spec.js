const { test, expect } = require('@playwright/test');

test.describe('Checkout Workflow', () => {
  test('user can complete checkout for an item in cart', async ({ page }) => {
    await page.goto('/products');

    await page.getByRole('link', { name: /wireless mouse/i }).click();
    await page.getByRole('button', { name: /add to cart/i }).click();
    await page.getByRole('link', { name: /cart/i }).click();

    await expect(page.getByText(/wireless mouse/i)).toBeVisible();

    await page.getByRole('button', { name: /checkout/i }).click();
    await page.getByLabel(/full name/i).fill('Student Tester');
    await page.getByLabel(/address/i).fill('123 Test Street');
    await page.getByLabel(/city/i).fill('Almaty');
    await page.getByLabel(/postal code/i).fill('050000');
    await page.getByLabel(/card number/i).fill('4111111111111111');
    await page.getByLabel(/expiry/i).fill('12/30');
    await page.getByLabel(/cvv/i).fill('123');

    await page.getByRole('button', { name: /place order|pay now/i }).click();

    await expect(page.getByText(/order confirmed|thank you for your purchase/i)).toBeVisible();
  });
});
