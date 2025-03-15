import { test, expect } from '@playwright/test';

test('File Upload', async ({ page }) => {
    const filePath = 'assets/playwright.svg';
    await page.goto('/pages/features/file-upload.html');
    await page.locator('#file-upload').setInputFiles(filePath);
    await expect(page.getByText('Fichier téléchargé avec succès')).toBeVisible();
    await page.screenshot({ path: 'test-results/upload-success.png' });
});