import { test } from '@playwright/test';

test.describe('사용자는 ', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });
});
