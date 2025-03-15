import { test, expect } from '@playwright/test';

test("Progress Bar stops at 75%", async ({ page }) => {
    await page.goto('/pages/features/progress-bar.html');

    // Sélection des éléments
    const progressBar = page.locator('#progress-bar');
    const startButton = page.locator('#start-progress');
    const stopButton = page.locator('#stop-progress');

    // Cliquer sur le bouton "Start" pour démarrer la progression
    await startButton.click();

    // Attendre que la largeur de la barre atteigne 75%
    await page.waitForFunction(
        'document.querySelector("#progress-bar").style.width === "75%"'
    );

    // Une fois la barre à 75%, cliquer sur le bouton "Stop"
    await stopButton.click();

    const messageResult = await page.locator('#progress-text').innerText()
    expect(messageResult).toBe("Progression : 75%");
});