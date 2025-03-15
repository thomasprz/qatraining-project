import {test, expect} from '@playwright/test'

test('Right Click', async ({page}) => {

    await page.goto("/pages/features/right-click.html")
    await page.locator("#right-click-button").click({button: "right"})

    const messageSucces = page.locator('#success-message').innerText()
    expect(await messageSucces).toBe("Clic droit détecté avec succès !")

})