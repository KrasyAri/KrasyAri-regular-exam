const { test, expect } = require('@playwright/test');

test('Check add book page', async ({ page }) => {
    await page.goto('https://krasyari.onrender.com/add-book');
    const form = await page.$('input');
    expect(form).toBeTruthy();
  });
  