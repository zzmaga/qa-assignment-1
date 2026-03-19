const { test, expect } = require('@playwright/test');

test.describe('Authentication', () => {
  test('user can login with valid credentials', async ({ page }) => {
    await page.goto('/login');

    await page.getByLabel('Email').fill('student.qa@example.com');
    await page.getByLabel('Password').fill('SecurePass123!');
    await page.getByRole('button', { name: /sign in|login/i }).click();

    await expect(page).toHaveURL(/dashboard|account|home/);
    await expect(page.getByText(/welcome|my account/i)).toBeVisible();
  });

  test('user sees validation error with invalid credentials', async ({ page }) => {
    await page.goto('/login');

    await page.getByLabel('Email').fill('student.qa@example.com');
    await page.getByLabel('Password').fill('wrong-password');
    await page.getByRole('button', { name: /sign in|login/i }).click();

    await expect(page.getByText(/invalid credentials|login failed/i)).toBeVisible();
  });
});
