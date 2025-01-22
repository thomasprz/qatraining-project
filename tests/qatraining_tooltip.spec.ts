import {test, expect} from '@playwright/test'


test('Tooltip', async ({page}) => {
    await page.goto('https://qatraining.fr/pages/features/tooltip.html')

    await page.hover('.tooltip-classic')
    const tooltipClassic = page.locator('.tooltip-classic').getAttribute('data-tooltip')
    expect(await tooltipClassic).toBe("Ceci est un tooltip classique")


    await page.hover('.tooltip-float')
    const tooltipFloat = page.locator(".tooltip-float").getAttribute('data-tooltip')
    expect(await tooltipFloat).toBe("Ceci est un tooltip flottant")


    await page.hover('.tooltip-triangle')
    const tooltipTriangle = page.locator('.tooltip-triangle').getAttribute("data-tooltip")
    expect(await tooltipTriangle).toBe('Ceci est un tooltip avec triangle')

    await page.hover('.tooltip-border')
    const tooltipBorder = page.locator('.tooltip-border').getAttribute("data-tooltip")
    expect(await tooltipBorder).toBe('Ceci est un tooltip avec bordure fine')

})