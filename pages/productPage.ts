import {test,expect,Locator,Page} from '@playwright/test'
export class ProductPage{
    readonly page:Page;
    readonly pageTitle:Locator;
    readonly sortDropdown:Locator;
    readonly inventoryItem:Locator;
    readonly addToCartButton:Locator;
    

    //constructor(page:Page){
    constructor(page:Page){
        this.page=page;
        this.pageTitle=page.getByText('Products');
        this.sortDropdown=page.locator('[data-test="product_sort_container"]');
        this.inventoryItem=page.locator('.inventory_item');
       // this.addToCartButton
        this.addToCartButton=page.locator('[data-test="shopping-cart-link"]');

    }
    //methods
    async verifyPageTitle(){
        await expect(this.pageTitle).toBeVisible();
    }
    async sortProductsBy(option:string){
        await this.sortDropdown.selectOption(option);
    }

    async addProductToCart(itemName:string):Promise<void>{
        const item =  this.inventoryItem.filter({ hasText: itemName });
        await item.getByRole('button', { name: 'Add to cart' }).click();

    }

    async removeItemFromCart(itemName:string){
        const item =  this.inventoryItem.filter({ hasText: itemName });
        await item.getByRole('button', { name: 'Remove' }).click();
    }

    async openitemDetails(itemName:string){
        let item =  this.inventoryItem.filter({ hasText: itemName });
        await item.locator('[data-test="inventory-item-name"]').click();
    }
    async getAllproductNames():Promise<string[]>{
        return await this.inventoryItem.locator('[data-test="inventory-item-name"]').allInnerTexts();
    }
    async getAllProductCount():Promise<number>{
        return await this.inventoryItem.count();    
    }
    }