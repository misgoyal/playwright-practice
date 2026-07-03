import { test,expect } from "@playwright/test";
import { faker } from '@faker-js/faker';
import contactPage from "../pages/contact.page";
test.describe("Contact", () => {
  let contactpage :contactPage;
   test.beforeEach(async ({ page }) => {
    contactpage = new contactPage(page); 
    await contactpage.navigate(); 

   })
   
    test("Open HomePage and verify the title", async ({ page }) => {
          
        
        //await page.pause();
          //click contact
       // await page.locator('#zak-primary-menu >> a[href="https://practice.sdetunicorns.com/contact/"]').click();
        //fill form
        await contactpage.contactName.fill(faker.person.firstName());
        await contactpage.contactEmail.fill(faker.internet.email());
        await contactpage.contactPhone.fill(faker.phone.number());
        await contactpage.contactMessage.fill(faker.lorem.paragraphs(2));
        await contactpage.contactSubmit.click();
        
       

        //const successMessage= page.getByRole('alert');
        await expect(contactpage.successMessage).toHaveText('Thanks for contacting us! We will be in touch with you shortly');
        
    })});