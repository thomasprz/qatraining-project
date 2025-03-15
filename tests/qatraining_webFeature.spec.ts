import { test, expect } from '@playwright/test';

test('Web Feature', async ({ page }) => {
    // Aller à la page cible
    await page.goto('/pages/features/web-feature.html');

    await page.getByRole('button', { name: "Changer le thème" }).click();
    await expect(page.locator('body')).toHaveClass('dark-theme');
    await expect(page.locator('body')).toHaveCSS('background-color', 'rgb(18, 18, 18)');
    await expect(page.locator('#content-box > p')).toBeHidden()
    await page.getByRole('button', { name: "Afficher/Masquer le contenu" }).click();
    await expect(page.locator('#content-box > p')).toBeVisible()
    await page.getByRole('button', { name: "Démarrer la minuterie" }).click();
    await expect(page.locator('#timer')).toHaveText('00:00');
});