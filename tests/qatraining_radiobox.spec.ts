import { test, expect } from '@playwright/test';

test('Sélectionner et vérifier un bouton radio avec pseudo-élément', async ({ page }) => {
  

  await page.goto('/pages/features/radio-box.html');

  const radioOption1 = page.locator('label').filter({ hasText: 'Option 1' })
  await radioOption1.click();
  const isChecked = await (radioOption1).isChecked();
  expect(isChecked).toBeTruthy();

  const radioOption2= page.locator('label').filter({hasText: 'Option 2'})
  await radioOption2.click()
  const isChecked2 = await (radioOption2).isChecked()
  expect(radioOption2).toBeTruthy()

  const radioOption3= page.locator('label').filter({hasText: 'Option 3'})
  await radioOption3.click()
  const isChecked3 = await (radioOption3).isChecked()
  expect(radioOption3).toBeTruthy()

});