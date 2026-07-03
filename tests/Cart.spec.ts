import { test,expect } from "@playwright/test";
import CartPage from "../pages/cart.page";

import { TIMEOUT } from "node:dns";
const path= require('path');
test.describe("Cart", () => {
    let cartPage : CartPage;
    //test("Open Cart", async ({ page }) => {
       // cartPage =new CartPage(page);

        //open URL
      //  await page.goto("/");
        //click cart
        
      // await page.locator('a.cart-page-link').nth(0).click()
       //await page.pause();
        //store test file path
        const filename = ['Test.txt','cricket.txt']
        for(const name of filename){
test(`should upload a ${name} file`, async ({ page }) => {
      cartPage = new CartPage(page);
  
      // Open url
      await page.goto("/cart");
  
      // provide test file path
      const filePath = path.join(__dirname, `../data/${name}`);
      
      // upload test file
       cartPage.uploadComponent().uploadFile(filePath);
  
      // assertion
      await expect(cartPage.uploadComponent().successMsg)
        .toContainText('uploaded successfully', {timeout: 10000});
    })
  }
        })
       // const filepath = path.join(__dirname, '../data/Test.txt');
    
       
  //await page.getByRole('button', { name: 'Select File' }).click();
  //await page.getByRole('button', { name: 'Select File' }).setInputFiles(filepath);
  //await page.getByRole('button', { name: 'Upload File' }).click();
  //await page.getByText('File Test.txt uploaded').click();

        //upload test file
       // await page.setInputFiles('input#upfile_1',filepath);
        //await page.locator('#upload_1').waitFor({state:'visible',timeout:10000})
        //click submit button
        
            //await expect(page.locator('#upload_1')).toBeEnabled();
        
        //cartPage.uploadComponent().uploadFile(filepath);
       
        //assertion
        // await expect(cartPage.uploadComponent().successMsg).toContainText('uploaded successfully',{timeout : 10000});
        
        
   // })});