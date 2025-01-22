import { test, expect } from '@playwright/test';

test('File Upload', async ({ page }) => {
    const filePath = '/Users/thomasprz/Documents/SiteInternet/Assets/Logo.jpg';

    await page.goto('https://qatraining.fr/pages/features/file-upload.html');
    await page.locator('#file-upload').click();
    await page.locator('#file-upload').setInputFiles(filePath);
    await page.getByText('Fichier téléchargé avec succè').click();
});