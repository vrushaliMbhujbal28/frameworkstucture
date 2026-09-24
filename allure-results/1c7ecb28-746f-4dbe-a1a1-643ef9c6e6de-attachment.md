# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: API\petstore.spec.ts >> petstore api tests >> Get the pet by id
- Location: tests\API\petstore.spec.ts:37:5

# Error details

```
SyntaxError: Unexpected token '<', "<html>
<h"... is not valid JSON
```

# Test source

```ts
  1  | import {test,expect} from '@playwright/test'
  2  | 
  3  | 
  4  | const petpayload={
  5  |   "id": 0,
  6  |   "category": {
  7  |     "id": 0,
  8  |     "name": "string"
  9  |   },
  10 |   "name": "doggie",
  11 |   "photoUrls": [
  12 |     "string"
  13 |   ],
  14 |   "tags": [
  15 |     {
  16 |       "id": 0,
  17 |       "name": "string"
  18 |     }
  19 |   ],
  20 |   "status": "available"
  21 | }
  22 | test.describe("petstore api tests",()=>{
  23 | 
  24 |     test("Create a new pet",async({request})=>{
  25 | 
  26 |         const response=await request.post('/pet',
  27 |         {data: petpayload  })
  28 | 
  29 |         console.log(response);
  30 |         let respomsenbody=await response.json();
  31 |         console.log(respomsenbody);
  32 |         expect(response.status()).toBe(200);
  33 |         expect(response.ok()).toBeTruthy();
  34 | 
  35 | })
  36 | 
  37 | test("Get the pet by id",async({request})=>{
  38 |   const response=await request.get('/78')
  39 | 
> 40 |   let respomsenbody=await response.json();
     |                     ^ SyntaxError: Unexpected token '<', "<html>
  41 |   console.log(respomsenbody); 
  42 |   expect(response.status()).toBe(200);
  43 | })
  44 | })
```