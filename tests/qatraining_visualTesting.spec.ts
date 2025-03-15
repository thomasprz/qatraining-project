import { test, expect } from '@playwright/test';

test('Visual Test', async ({ page }) => {
    // Aller à la page cible
    await page.goto('/pages/features/visual-testing.html');
    // Vérifier que l'image est cachée
    await expect(page.getByRole('img', { name: 'Logo de Facebook' })).toBeHidden();
    // Cliquer sur le bouton pour afficher l'image
    await page.getByRole('button', { name: "Afficher l'image" }).click();
    // Attendre que l'image soit visible
    await page.waitForSelector('img[alt="Logo de Facebook"]');
    // Vérifier que l'image est visible
    await expect(page.getByRole('img', { name: 'Logo de Facebook' })).toBeVisible();
});