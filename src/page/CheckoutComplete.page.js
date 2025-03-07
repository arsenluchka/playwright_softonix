const {CheckOutInfoPage} = require('./CheckoutInfo.page');

export class CheckoutCompletePage extends CheckOutInfoPage {
    url = "/checkout-complete.html";
    
    get completeHeader() {return this.page.locator('[data-test="complete-header"]')};
}