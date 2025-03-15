import {test, expect} from '@playwright/test'

 test("Alert Button", async({page}) => {
    await page.goto('/pages/features/copy-paste.html')

    await page.locator("#copy-field").fill("Bonjour");
    await page.locator("#copy-field").press('ControlOrMeta+a');
    await page.locator("#copy-field").press('ControlOrMeta+c');

    await page.locator("#paste-area").click();
    await page.locator("#paste-area").press('ControlOrMeta+v');

    await expect(page.locator("#paste-area")).toHaveValue("Bonjour");
})