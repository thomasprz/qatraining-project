import { test, expect } from '@playwright/test';

test('Interact with new window', async ({ page, context }) => {
    // Aller à la page cible
    await page.goto('/pages/features/window-focus.html');

    // Cliquer sur le bouton et attendre que la nouvelle fenêtre s'ouvre
    const [newPage] = await Promise.all([
        context.waitForEvent('page'), // Attendre l'ouverture de la nouvelle fenêtre
        page.getByRole('button', { name: "Ouvrir une nouvelle fenêtre" }).click(),
    ]);

    // Remplir le champ texte dans la nouvelle fenêtre
    await newPage.getByPlaceholder('Entrez votre texte ici').fill('Test input');

    // Fermer la nouvelle fenêtre
    await newPage.getByRole('button', { name: 'Fermer la fenêtre' }).click();
});