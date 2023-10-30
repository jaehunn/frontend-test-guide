import { test, expect } from '@playwright/test';

test.describe('사용자는 Home 에 접근 할 수 있다.', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('', async ({ page }) => {
    await expect(page).toHaveTitle('Frontend Test Guide');
  });
});
