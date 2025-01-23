import { test, expect } from '@playwright/test';

test('Slider', async ({ page }) => {
    // Naviguer vers la page
    await page.goto('https://qatraining.fr/pages/features/slider.html');

    // Localiser le slider et récupérer sa bounding box
    const slider = page.locator('#slider');
    const sliderBound = await slider.boundingBox();

    // Déplacer la souris vers le slider et le glisser à 95% de sa largeur
    if (sliderBound) { // Vérification pour éviter une erreur si boundingBox est null
        await page.mouse.move(sliderBound.x, sliderBound.y + sliderBound.height / 2); // on se positionne au centre du slider
        await page.mouse.down();
        await page.mouse.move(
            sliderBound.x + (sliderBound.width * 95) / 100,
            sliderBound.y + sliderBound.height / 2
        );
        await page.mouse.up();

        // Vérifier que la valeur du slider est mise à jour (par exemple, 95)
        const sliderValue = await page.locator('#slider-value').innerText();
        expect(sliderValue).toBe('Valeur du slider : 96');
    } else {
        throw new Error('Impossible de localiser le slider.');
    }
});