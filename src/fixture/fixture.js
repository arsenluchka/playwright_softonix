import { test as base } from '@playwright/test';
import { LoginPage } from "../page/Login.page";
import { InventoryPage } from '../page/Inventory.page';
import { CartPage } from '../page/Cart.page';
import { CheckOutInfoPage } from '../page/CheckoutInfo.page';
import { CheckOutOverviewPage } from '../page/CheckoutOverview.page';
import { CheckoutCompletePage } from '../page/CheckoutComplete.page';


export const test = base.extend({
    loginPage: async ({page}, use)=>{
        await use(new LoginPage(page))
    },
    inventoryPage: async ({page}, use)=>{
        await use(new InventoryPage(page))
    },
    cartPage: async ({page}, use)=>{
        await use(new CartPage(page))
    },
    checkOutInfo: async ({page}, use)=>{
        await use(new CheckOutInfoPage(page))
    },
    checkOutOverview: async ({page}, use)=>{
        await use(new CheckOutOverviewPage(page))
    },
    checkOutComplete: async ({page}, use)=>{
        await use(new CheckoutCompletePage(page))
    }
})