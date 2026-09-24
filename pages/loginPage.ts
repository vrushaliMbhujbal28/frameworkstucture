import { Page, Locator, expect } from '@playwright/test';
export class LoginPage {
    readonly page: Page;
    readonly loginButton: Locator;
    readonly passwordInput: Locator;
    readonly usernameInput: Locator;
    readonly errorMessage: Locator;

    constructor(page: Page) {
        this.page = page;
        // this.loginButton = page.getByRole('button', { name: 'Login' });
         this.passwordInput = page.locator('[data-test="password"]');
        // this.usernameInput = page.locator('[data-test="username"]');   
         this.errorMessage = page.locator('[data-test="error"]');
        this.loginButton = page.getByRole('button', { name: 'Login' });
        this.usernameInput = page.getByRole('textbox', { name: 'Username' });
     

    }

    //methods
    async navigateToLoginPage(url: string): Promise<void> {
        await this.page.goto(url);
        await expect(this.page).toHaveTitle('Swag Labs');
        await expect(this.page).toHaveURL(url);
    }


    async enterUsername(username: string): Promise<void> {
        await this.usernameInput.fill(username);
    }

    async enterPassword(password: string): Promise<void> {
        await this.passwordInput.fill(password);
    }
    async clickLoginButton(): Promise<void> {
        await this.loginButton.click();
    }

    async performLogin(username: string, password: string): Promise<void> {
        await this.enterUsername(username);
        await this.enterPassword(password);
        await this.clickLoginButton();
    }
    async getErrorMessage(): Promise<string> {
        return await this.errorMessage.textContent() || '';
    }

}