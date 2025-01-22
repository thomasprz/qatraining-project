import {test, expect} from '@playwright/test'

test('Checkbox', async ({page}) => {
    await page.goto('https://qatraining.fr/pages/features/checkbox.html')

    const checkboxes = ['#checkbox-1', '#checkbox-2', '#checkbox-3', '#checkbox-4'];

        for (const checkbox of checkboxes) {
            await page.check(checkbox)
            const isChecked = await page.isChecked(checkbox);
            expect(isChecked).toBeTruthy()
        }

})