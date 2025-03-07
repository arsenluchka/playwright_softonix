const {InventoryPage} = require('./Inventory.page');

export class CartPage extends InventoryPage {
    url = "/cart.html";

    get checkoutBtn() {return this.page.locator('[data-test="checkout"]')};
}