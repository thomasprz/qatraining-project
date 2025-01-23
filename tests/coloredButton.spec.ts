import { test, expect } from '@playwright/test';

test("Alert Button", async ({ page }) => {
  
  await page.goto("https://qatraining.fr/pages/features/colored-button.html")
  await page.getByRole('button', {name: 'Rouge'}).click()

  expect(await page.locator('#status-message').innerText()).toBe('Vous avez cliqué sur le bouton rouge !')

})
