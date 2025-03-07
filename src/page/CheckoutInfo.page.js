const {CartPage} = require('./Cart.page');

export class CheckOutInfoPage extends CartPage {
    url = "/checkout-step-one.html";
    
    get firstName() {return this.page.locator('[data-test="firstName"]')};

    get lastName() {return this.page.locator('[data-test="lastName"]')};

    get postCode() {return this.page.locator('[data-test="postalCode"]')};

    get continueBtn() {return this.page.locator('[data-test="continue"]')};
}