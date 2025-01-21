import {test, expect} from '@playwright/test'

test('Login page', async ({ page }) => {
    // Capture des dialogues avant toute action
    page.on('dialog', async dialog => {
        if (dialog.message().includes('Connexion réussie !')) {
            expect(dialog.type()).toContain('alert')
            expect(dialog.message()).toContain('Connexion réussie !')
        } else if (dialog.message().includes('Veuillez entrer une adresse e-mail valide.')) {
            expect(dialog.type()).toContain('alert')
            expect(dialog.message()).toContain('Veuillez entrer une adresse e-mail valide.')
        } else if (dialog.message().includes('Un mail est envoyé pour réinitialiser le mot de passe.')) {
            expect(dialog.type()).toContain('alert')
            expect(dialog.message()).toContain('Un mail est envoyé pour réinitialiser le mot de passe.')
        }
    })

    await page.goto('https://qatraining.fr/pages/features/login.html')
    expect(await page.locator('h1')).toHaveText('Login')

    // Remplissage des champs de connexion
    await page.locator('#username').fill("Thomas")
    await page.locator('#password').fill("Lille)")
    await page.getByRole('button', { name: "Se connecter" }).click()

    // Cliquer sur "Mot de passe oublié"
    await page.getByRole('link', { name: "Mot de passe oublié ?" }).click()

    // Cliquer sur "Réinitialiser le mot de passe"
    await page.getByRole('button', { name: "Réinitialiser le mot de passe" }).click()

    // Remplir l'email pour réinitialisation
    await page.locator("#reset-email").fill('test')
    await page.getByRole('button', { name: "Réinitialiser le mot de passe" }).click()

})