import {test, expect} from '@playwright/test'

test("Alert Button", async({page}) => {
    await page.goto('/pages/features/selenium-wait.html')
    await page.getByRole('button', {name:'Simuler un Selenium Wait'}).click()
    await page.waitForTimeout(3000)
    expect(await page.locator('#status-message').innerText()).toBe('Attente terminée. Action réussie !')
})