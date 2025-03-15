import {test, expect} from '@playwright/test'
import exp from 'constants'

test('Drag and Drop', async ({page}) => {

    await page.goto('/pages/features/drag-drop.html')
    await page.locator('#drag-item').dragTo(page.locator("#drop-zone"))
    await page.waitForTimeout(1000)
    const message = page.locator('#success-popup').innerText()
    expect(await message).toBe("Déposé avec succès !")
})