const {CheckOutInfoPage} = require('./CheckoutInfo.page');

export class CheckOutOverviewPage extends CheckOutInfoPage {
    url = "/checkout-step-two.html";
    
    get finishBtn() {return this.page.locator('[data-test="finish"]')};
}