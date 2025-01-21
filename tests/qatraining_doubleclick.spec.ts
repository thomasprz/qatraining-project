import {test, expect} from '@playwright/test'

test('Double Click', async ({page}) => {
    await page.goto('https://qatraining.fr/pages/features/double-click.html')

    await page.locator('#double-click-btn').dblclick();
    await page.waitForSelector('#success-message', { state: 'visible' }) //Mettre un state avec waitForSelector
    const message = await page.locator('#success-message').innerText(); // On récupère le texte de l'id #success-message
    expect(message).toBe("Double clic détecté avec succès !");
})
