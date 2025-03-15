import {test, expect} from '@playwright/test'


test('Placeholder', async ({page}) => {

    await page.goto('/pages/features/placeholder.html')
    await page.getByPlaceholder('Votre texte ici...').fill("Texte de Remplissage")

})