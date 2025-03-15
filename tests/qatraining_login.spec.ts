import { test, expect } from '@playwright/test';

test('Login page', async ({ page }) => {
    let alertShown = false;

    page.on('dialog', async (dialog) => {
        const message = dialog.message();
        if (message.includes('Connexion réussie !')) {
            expect(dialog.type()).toContain('alert');
        } else if (message.includes('Veuillez entrer une adresse e-mail valide.')) {
            expect(dialog.type()).toContain('alert');
        } else if (message.includes('Un mail est envoyé pour réinitialiser le mot de passe.')) {
            expect(dialog.type()).toContain('alert');
        }
        await dialog.accept();
    });

    await page.goto('/pages/features/login.html');
    await expect(page.locator('h1')).toHaveText('Login');

    await page.locator('#username').fill('Thomas');
    await page.locator('#password').fill('Lille');
    await page.getByRole('button', { name: 'Se connecter' }).click();

    await page.getByRole('link', { name: 'Mot de passe oublié ?' }).click();

    await page.getByRole('button', { name: 'Réinitialiser le mot de passe' }).click();

    await page.locator('#reset-email').fill('test@gmail.com');
    await page.getByRole('button', { name: 'Réinitialiser le mot de passe' }).click();

});
