import { test,expect } from "@playwright/test";
import HomePage from "../pages/home.page";

test.describe("Home", () => {
    let homepage :HomePage;
   test.beforeEach(async ({ page }) => {
    homepage = new HomePage(page); 
    await homepage.navigate(); 

   })
   
    test("Open HomePage and verify the title", async ({ page }) => {
         // homepage = new HomePage(page); 
        //open URL
        //await page.goto("https://practice.sdetunicorns.com/");
         //  await homepage.navigate(); 
        //Verify title
        await expect(page).toHaveTitle("Practice E-Commerce Site – SDET Unicorns");
    });
   
        test('Open About Page & Verify the title', async ({ page }) => {
           // homepage = new HomePage(page); 
            //Open URL
            //await page.goto("https://practice.sdetunicorns.com/about/");
           // await homepage.navigate(); 
            //Verify Title
            await expect(page).toHaveTitle("About – Practice E-Commerce Site");
        
        
    });
       test('Click GetStarted button using CSS selector', async ({ page }) => {
        //homepage = new HomePage(page);    
        //Open URL
           // await homepage.navigate(); 

            //Click getStarted button
           //await page.locator("#get-started").click();
           await homepage.getStartedBtn.click();

            //Verify URL has #get-started
            await expect(page).toHaveURL(/.*#get-started/);
        
        
    });
        test('Verify heading text is visible using text selector', async ({ page }) => {
            //homepage = new HomePage(page);    
            //Open URL
            //await homepage.navigate(); 

            //locate heading text
           //const headingText = await page.locator('text=Think different. Make different.');
            const headingText = homepage.headingText; 
            //Verify heading text is visible
            await expect(headingText).toBeVisible();
        
        
    });
    
      test('Verify home link is enabled using text and css selector', async ({ page }) => {
        //homepage = new HomePage(page);    
            //Open URL
            //await homepage.navigate(); 

            //find home text
           //const homeText = await page.locator('#zak-primary-menu >> text=Home');
            //const homeText = await page.locator('#zak-primary-menu:has-text("Home")');
            const homeText =  homepage.homeText;
            //Verify home text is enabled
            await expect(homeText).toBeEnabled();
        
        
    });
      test('Verify search icon using xpath', async ({ page }) => {
       // homepage = new HomePage(page);    
            //Open URL
           // await homepage.navigate(); 

            //find searchicon
     
            //const searchIcon = await page.locator('//*[@class="zak-header-actions zak-header-actions--desktop"]//*[@class="zak-header-search__toggle"]');
            const searchIcon =  homepage.searchIcon;
            //Verify home text is enabled
            await expect(searchIcon).toBeVisible();
        
        
    });
        test('Verify multiple text elements', async ({ page }) => {
            //homepage = new HomePage(page);    
            const expectedLinks=[
                "Home",
                "About",
                "Shop",
                "Blog",
                "Contact",
                "My account",
            ];
           
            //Open URL
           // await homepage.navigate(); 
                     
            //find navLinks
         //const navLinks = page.locator('#zak-primary-menu li[id*=menu]');
         //const navLinks =  homepage.navLinks;
         const navLinksBlog =  homepage.navLinks.nth(3);
            //Verify navLinks text
        expect(homepage.getNavLinkText()).toEqual(expectedLinks);
        expect(await navLinksBlog.textContent()).toEqual(expectedLinks[3]);
        
        
    });
    
});
