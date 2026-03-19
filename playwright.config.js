// Basic Playwright configuration for a QA starter project.
const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  timeout: 30 * 1000,
  expect: {
    timeout: 5000
  },
  use: {
    baseURL: 'https://example-ecommerce.test',
    headless: true,
    screenshot: 'only-on-failure',
    trace: 'on-first-retry'
  },
  reporter: [['list'], ['html', { open: 'never' }]]
});
