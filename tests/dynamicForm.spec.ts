import { test, expect } from '@playwright/test';

test("Dynamic Form", async ({ page }) => {
  
  await page.goto("https://qatraining.fr/pages/features/dynamic-form.html")
  await page.fill('input[name="name"]','Thomas')
  await page.fill('input[name="email"]','tom.pcheg@gmail.com')
  await page.fill('#message','Test automatisé avec Playwright')

  await page.check('#agree')

  await page.getByRole('button', {name:'Soumettre'}).click()

  expect(await page.locator('.success-message')).toBeVisible
  expect(await page.locator('.success-message').innerText()).toBe('Formulaire soumis avec succès !')

})
