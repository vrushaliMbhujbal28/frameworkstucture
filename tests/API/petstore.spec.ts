import {test,expect} from '@playwright/test'


const petpayload={
  "id": 0,
  "category": {
    "id": 0,
    "name": "tony"
  },
  "name": "doggie",
  "photoUrls": [
    "tony"
  ],
  "tags": [
    {
      "id": 0,
      "name": "tonyname"
    }
  ],
  "status": "available"
}
test.describe("petstore api tests",()=>{

    test("Create a new pet",async({request})=>{

        const response=await request.post('/v2/pet',
        {data: petpayload  })

        console.log(response);
        let respomsenbody=await response.json();
        console.log(respomsenbody);
        expect(response.status()).toBe(200);
        expect(response.ok()).toBeTruthy();

})

test("Get the pet by id",async({request})=>{
  const getresponse=await request.get('/v2/pet/78')

  let respomsenbody=await getresponse.json();
  console.log(respomsenbody); 
  expect(getresponse.status()).toBe(200);

  expect(petpayload.name).toBe(respomsenbody.name)
})
})  