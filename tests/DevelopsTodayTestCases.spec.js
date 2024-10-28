import { test, expect } from '@playwright/test';
test.describe('Develops today test cases Diego Esteban Blasco', () => {

    test.beforeEach(async ({ browser, page }) => {
        await page.goto('https://vite-react-alpha-lemon.vercel.app/')
    })

    test.afterEach(async ({ page }) => {
        await page.close()
    })


    test('Search Functionality', async ({ page }) => {
        await page.getByLabel('Search').click();
        await page.getByLabel('Search').fill('Winter Winds');
        const songCount = await page.locator('text="Winter Winds"').count();
        await expect(songCount).toEqual(1);
        const songResult = page.locator('text="Winter Winds"');
        await expect(songResult).toBeVisible
        // In the making of this test case i found that the "search" functionality does not admit caps letters
        // Even though the result filtered has caps letters, for example "Winter Winds", this is misleading
        // and can cause some test case to fail when filtering
    })

    test('Add Track', async ({ page }) => {
        await page.getByLabel('Search').click();
        await page.getByLabel('Search').fill('Winter Winds');
        const addButton = await page.getByRole('button', { name: '+' });
        await expect(addButton).toBeVisible();
        await addButton.click();
        const yourPlaylist = page.locator('#playlist').getByText('Winter Winds');
        await expect(yourPlaylist).toBeVisible();
    });
    test('Add Multiple Tracks', async ({ page }) => {
        await page.locator('div').filter({ hasText: /^Summer Breeze03:35\+$/ }).getByLabel('controlled').check();
        await page.locator('div').filter({ hasText: /^Autumn Leaves03:00\+$/ }).getByLabel('controlled').check();
        await page.locator('div').filter({ hasText: /^Winter Winds04:00\+$/ }).getByLabel('controlled').check();
        await page.getByRole('button', { name: 'Add 3 tracks' }).click();
        const playlist = '#playlist';
        const songs = ['Summer Breeze', 'Autumn Leaves', 'Winter Winds'];
        for (const song of songs) {
            const songLocator = page.locator(playlist).getByText(song);
            await expect(songLocator).toBeVisible()
        }

    })

})