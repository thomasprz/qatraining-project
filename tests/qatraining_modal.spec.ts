import { test, expect } from '@playwright/test';

test("Alert Button", async ({ page }) => {
  
  await page.goto("/pages/features/modal.html")
  await page.getByRole('button', {name: 'Ouvrir la fenêtre modale'}).click()

  const modal = page.locator('#modal');
  await expect(modal).toBeVisible(); // Vérifie que la modale est visible
  await expect(modal).toContainText('Contenu de la fenêtre modale');

  await page.getByRole('button', {name:"Fermer"}).click()

  });
