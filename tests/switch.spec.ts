import {test, expect} from '@playwright/test'
import { stat } from 'fs'

test('Switch', async ({page}) => {

    await page.goto('https://qatraining.fr/pages/features/switch.html')

    expect(await page.locator('#status-message').innerText()).toBe('Le switch est désactivé.');

    await page.locator(".switch-slider").check()
    
    expect(await page.locator('#status-message').innerText()).toBe('Le switch est activé.');






})