import{test as base,expect} from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
//declaration fixture

export type LoginFixture = {
    loginPage: LoginPage;
};
export let test=base.extend<LoginFixture>({
    loginPage: async ({ page }, use) => {
        const loginPage = new LoginPage(page);  
        awaitgit loginPage.navigateToLoginPage(process.env.saucedemourl as string);
        await use(loginPage);
    }   })
export {expect}