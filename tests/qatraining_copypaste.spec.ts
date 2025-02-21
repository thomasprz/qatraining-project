// import {test, expect} from '@playwright/test'

// test("Alert Button", async({page}) => {
//    page.on('dialog', async dialog => {
//        if (dialog.message().includes('Texte copié dans le presse-papier !')) {
//            expect(dialog.type()).toContain('alert')
//            expect(dialog.message()).toContain('Texte copié dans le presse-papier !')
//            await dialog.accept()
//        } else if (dialog.message().includes('Texte collé avec succès !')) {
//            expect(dialog.type()).toContain('alert')
//            expect(dialog.message()).toContain('Texte collé avec succès !')
//        }
//    })
// 
//    await page.goto('https://qatraining.fr/pages/features/copy-paste.html')

//    await page.locator("#copy-field").fill("Bonjour")
//    await page.getByRole('button', {name: "Copier"}).click()
//     const pasteField = page.locator("#paste-area")
//     await pasteField.click()
//     await page.keyboard.press("Control+V")
// })

