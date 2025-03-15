import { test, expect } from '@playwright/test';

test("Hidden Element", async ({ page }) => {
    await page.goto('/pages/features/hidden-element.html');
    await expect(page.locator('#hidden-content')).toBeHidden()
    await page.getByRole('button', {name:'Afficher/Masquer le contenu caché'}).click()
    await expect(page.locator('#hidden-content')).toBeVisible()
    await expect(page.getByRole('heading', {name:'Contenu Caché'})).toBeVisible()
});