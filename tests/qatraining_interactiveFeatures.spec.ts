import { test, expect } from '@playwright/test';

test("Interactive Features 2", async ({ page }) => {
    await page.goto('https://qatraining.fr/pages/features/interactive-features.html');
    await page.getByRole('button', {name:'Cliquez pour afficher/masquer le contenu'}).click()
    await expect(page.locator('.panel')).toBeVisible()
    await expect(page.locator('.panel')).toContainText('Voici un contenu caché dans un accordéon. Il peut être développé ou réduit.')

    await page.getByRole('button', {name:'Démarrer le compte à rebours'}).click()
    // Vérifier chaque seconde du compte à rebours
    for (let i = 10; i >= 1; i--) {
        await expect(page.locator('#countdown')).toHaveText(`Temps restant: ${i}`);
    }
    await expect(page.locator('#countdown')).toHaveText('Le temps est écoulé !');
});