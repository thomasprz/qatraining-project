import {test, expect} from '@playwright/test'

test("Alert Button", async({page}) => {
    await page.goto('/pages/features/alert-button.html')

    await page.getByRole('button', {name:"Cliquez-moi pour une alerte"}).click()

    page.on('dialog', async dialog => {
        expect(dialog.type()).toContain("alert");
        expect(dialog.message()).toContain("Bouton cliqué !");
        await dialog.accept();
    })
})