import { test, expect } from '@playwright/test';

test('Sticky Header', async ({ page }) => {
  // Naviguer vers la page
  await page.goto('https://qatraining.fr/pages/features/sticky-header.html');

  // Localiser l'élément du header sticky
  const navigationHeader = page.locator('nav');

  // Vérifier que l'en-tête est visible au début
  await expect(navigationHeader).toBeVisible();

  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));

  // Vérifier que l'en-tête est toujours visible après le défilement
  await expect(navigationHeader).toBeVisible();

});