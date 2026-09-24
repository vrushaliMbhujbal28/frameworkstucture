import {test as base,expect} from '@playwright/test'
import { LoginPage } from '../pages/loginPage'
import {ProductPage} from '../pages/productPage'
import dotenv from 'dotenv';
dotenv.config({ path: 'test.env' });

//declartion of fixtures

export type ProuctsPageFixture ={
    productsPage:ProductPage
}

export let test=base.extend<ProuctsPageFixture>({

productsPage: async({page},use)=>{

let loginPage = new LoginPage(page);
await loginPage.navigateToLoginPage(process.env.saucedemourl as string)
await loginPage.performLogin(process.env.saucedemousername as string, process.env.saucedemo_password as string)

let productsPage = new ProductPage(page)
await productsPage.verifyPageTitle()

await use(productsPage)

}

})
export{expect}