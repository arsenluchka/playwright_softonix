const {LoginPage} = require('./Login.page');

export class InventoryPage extends LoginPage {
    url = "/inventory.html";

    get pageTitle() {return this.page.locator(".title")};

    get backpackProductAddToCardBtn() {return this.page.locator('[data-test="add-to-cart-sauce-labs-backpack"]')};

    get shoppingCartLink() {return this.page.locator('[data-test="shopping-cart-link"]')};  
}