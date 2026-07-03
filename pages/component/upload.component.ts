import { Page, Locator } from "@playwright/test";

class UploadComponent{
    private page: Page;
    uploadButton: Locator;
    uploadInput: string;
    successMsg: Locator;
      
    constructor(page:Page)
    {
        this.page=page;
        this.uploadInput= 'input#upfile_1';
       this.uploadButton= page.locator('#upload_1');
       this.successMsg=page.locator('#wfu_messageblock_header_1_1');
      
    }
   async uploadFile(filepath:string)
   {
      await this.page.setInputFiles(this.uploadInput,filepath);
      await this.uploadButton.click();
   }
}
export default UploadComponent;