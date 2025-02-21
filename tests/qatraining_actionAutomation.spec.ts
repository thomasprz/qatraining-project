import { test, expect } from '@playwright/test';

test("Action Automation", async ({ page }) => {
  await page.goto('https://qatraining.fr/pages/features/action-automation.html');
  await page.getByRole('button', {name:'Simuler un Clic avec Délai'}).click()
  await expect(page.locator('#status-message')).toHaveText('Clic réussi après attente !')

  await page.getByRole('button', {name:'Changer la couleur du fond'}).click()
  await expect(page.locator('body')).toHaveCSS('background-image', 'linear-gradient(rgb(241, 196, 15), rgb(247, 249, 252))');

  await page.getByRole('button', {name:'Animer la boîte'}).click()
  await expect(page.locator('#animated-box')).toHaveCSS('transform', 'matrix(1, 0, 0, 1, 300, 0)')
});
