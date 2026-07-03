import { Page, Locator } from "@playwright/test";

class contactPage{
    page: Page;
    contactName: Locator;
    contactEmail: Locator;
    contactPhone: Locator;
    contactMessage: Locator;
    contactSubmit: Locator;
    successMessage: Locator;
    //expectedMessage: string;
        
    constructor(page:Page)
    {
        this.page=page;
        this.contactName= page.getByRole('textbox', { name: 'Name *' });
        this.contactEmail = page.getByRole('textbox', { name: 'Email *' });
        this.contactPhone = page.getByRole('textbox', { name: 'Phone *' });
        this.contactMessage = page.getByRole('textbox', { name: 'Message' });
        this.contactSubmit = page.getByRole('button', { name: 'Submit' });
        this.successMessage= page.locator('div[role="alert"]')
        //this.expectedMessage ='Thanks for contacting us! We will be in touch with you shortly';
    }
    async navigate(){
        await this.page.goto("/contact");
    }

   
}
export default contactPage;