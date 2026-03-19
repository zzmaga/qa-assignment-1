const { test, expect } = require('@playwright/test');

test.describe('Product Search', () => {
  test('user can search for a product', async ({ page }) => {
    await page.goto('/');

    await page.getByPlaceholder(/search products/i).fill('headphones');
    await page.getByRole('button', { name: /search/i }).click();

    await expect(page).toHaveURL(/search/);
    await expect(page.getByText(/headphones/i)).toBeVisible();
  });

  test('user sees empty state when no products match', async ({ page }) => {
    await page.goto('/');

    await page.getByPlaceholder(/search products/i).fill('nonexistent-item-12345');
    await page.getByRole('button', { name: /search/i }).click();

    await expect(page.getByText(/no products found|no results/i)).toBeVisible();
  });
});
