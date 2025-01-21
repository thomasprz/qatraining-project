import {test, expect} from '@playwright/test'


test('Scroll', async ({page}) => {

    await page.goto('https://qatraining.fr/pages/features/scroll.html')
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await page.waitForSelector('#scroll-message');
    const message = await page.locator('#scroll-message').innerText();
    expect(message).toBe('Vous avez effectué un scroll en bas de page !');
})

//Certaines pages ou applications web déclenchent des actions spécifiques lors du scrolling