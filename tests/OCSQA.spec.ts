import { test,expect } from "@playwright/test";
test.describe("Contact", () => {
    test("Open HomePage and verify the title", async ({ page }) => {
        //open URL
        await page.goto("https://ocsserver.qa.emma.ap.aon.net/Web/Search");
         
        
        //fill form
        await page.locator('#input27').fill('misha.goyal@aon.com');
        await page.locator('#input35').fill('Birthday#262026');
        await page.locator('.button').click();
        
        
const header = page.locator('.textColor');

await expect(header).toBeVisible({ timeout: 15000 });
await expect(header).toContainText('One Client System');

       //await expect(page.locator('.textColor')).toHaveText('One Client System');
       

        
//await expect(page.getByText('One Client System')).toBeVisible();
await page.locator('#searchTextBox').nth(0).fill('5267510');
        await page.locator('#submitSearch').nth(0).click();
//await page.getByPlaceholder('Enter Search Criteria').fill('5267510');
//await page.getByRole('button').click(); 

    })});