import { test, expect } from '@playwright/test';

test("iFrame", async ({ page }) => {
  await page.goto('https://qatraining.fr/pages/features/frame-button.html');

  const iframeLocator = page.locator('#button-frame');
  const iframe = await iframeLocator.contentFrame();
  
  // Vérifier que le bouton dans l'iframe est visible avant de cliquer
  const buttonLocator = iframe.locator('button');
  await buttonLocator.click();

  // Attendre l'alerte avant de cliquer sur le bouton
  page.on('dialog', async dialog => {
    // Vérifier que le texte de l'alerte est correct
    expect(dialog.message()).toBe("Bouton dans l'iframe cliqué !");
    // Accepter l'alerte (clique sur "OK")
    await dialog.accept();
  });

});
