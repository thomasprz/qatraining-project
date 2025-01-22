import {test, expect} from '@playwright/test'

test('Mouse Hover', async ({page}) => {
    await page.goto('https://qatraining.fr/pages/features/mouse-hover.html')

    await page.getByRole('button', {name:"Hover me"}).hover()
    await page.waitForSelector('.hover-menu', { state: 'visible' });
    await page.locator('.hover-menu ul li', { hasText: 'Option 1' }).click();

})

