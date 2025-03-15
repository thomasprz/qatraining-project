import {test, expect} from '@playwright/test'

test("Alert Button", async({page}) => {
    await page.goto('/pages/features/date-picker.html')

    const date = "1994-12-23"
    await page.locator('#date-picker').fill(date)
    const messageSucces = await page.locator('#success-message').textContent()
    expect(messageSucces?.trim()).toEqual("Date sélectionnée avec succès !");
})