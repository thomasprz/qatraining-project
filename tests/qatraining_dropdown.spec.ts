import {test, expect} from '@playwright/test'
import exp from 'constants'

test('Dropdown', async ({page}) => {

    await page.goto('https://qatraining.fr/pages/features/dropdown.html')
    const value = "1"
    await page.locator('#dropdown-menu').selectOption({value})

    const option = await page.locator("#dropdown-menu").innerText()
    await expect(option.includes("Option 1")).toBeTruthy()
    await expect(page.locator("#dropdown-menu-message")).toHaveText("Vous avez sélectionné : Option 1")

    await page.locator("#rounded-dropdown").selectOption({value: "y"})
    await expect(page.locator("#rounded-dropdown-message")).toHaveText("Vous avez sélectionné : Option B")

    await page.getByRole('checkbox', {name:"Option 4"}).check()
    expect(await page.isChecked('input[type="checkbox"][value="Option 4"]')).toBeTruthy();
    await expect(page.locator("#multiselect-output")).toHaveText("Vous avez sélectionné : Option 4")

})