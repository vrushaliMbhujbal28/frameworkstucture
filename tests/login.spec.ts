import{test,expect} from '../fixtures/loginFixture';
import { LoginPage } from '../pages/loginPage';
import path from 'path';
import dotenv from 'dotenv';
import { JsonReader } from '../utils/JsonReader';

dotenv.config({ path: path.resolve(__dirname, '../test.env') });
console.log(__dirname);
console.log(path.resolve(__dirname, '../test.env'));
let url = process.env.saucedemourl as string;
let username = process.env.saucedemousername as string;
let password = process.env.saucedemo_password as string;

//reading data from json file
 const testData = JsonReader.read<any>('sauseDemoData.json');
 const lockedUser = testData.crendentials.lockedUsername;
 //const password = testData.password;  

test.describe('saucedemo Login Test', () => {

    test('Login with valid credentials', async ({ loginPage }) => {
        await loginPage.performLogin(username, password);
        //await expect(page).toHaveURL('/\/inventory\.html');
    });       
   
    

    test("should not login with locked user", async ({ loginPage }) => {
        
        await loginPage.performLogin(lockedUser, password);
        await expect(loginPage.errorMessage).toBeVisible();
        await expect(loginPage.errorMessage).toHaveText(testData.expectedMessages.lockedOutUser)

    });
});