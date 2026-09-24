import {test,expect} from '../fixtures/product.fixture'
import {ExcelReader} from '../utils/excelReaders'
import path from 'path';
import dotenv from 'dotenv';

 let testData=ExcelReader.read<any>('SauceDemoTestData.xlsx','Products')
 console.log(JSON.stringify(testData))
console.log("---------")
let testData1=ExcelReader.getRowByTestCaseId<any>('Products','prod-01')
 console.log(JSON.stringify(testData1))
console.log("---------")
let productCount=ExcelReader.getCellValue<any>('Products','prod-01','ProductsCount')
console.log(`Total Product Count: ${productCount}`)
test.describe('Product Page Tests',()=>{    
    test("prod -01: verfiy prodcut page count", async ({productsPage}) => {
        // Test implementation here

        await productsPage.verifyPageTitle();
        let expectedProductCount=Number(ExcelReader.getCellValue<any>('Products','PROD-01','ProductsCount'));
        console.log(`Expected Product Count: ${expectedProductCount}`);
        let productCount=await productsPage.getAllProductCount();
        console.log(`Total Product Count: ${productCount}`);
        expect(productCount).toBe(expectedProductCount);
    });

    
});