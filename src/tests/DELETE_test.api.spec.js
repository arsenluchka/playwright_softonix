import { test, expect } from '@playwright/test';

const url = "https://jsonplaceholder.typicode.com/";

test("DELETE item", async ({request})=>{
    const response = await request.delete(url+"/posts/1",{
      data:{
        userId: 1,
    }
});
console.log(await response.json())
    expect(response.status()).toEqual(200);
});

test("DELETE Wrong request", async ({request})=>{
    const response = await request.get(url+"/posts300");
    console.log(await response.json())
    expect(response.status()).toEqual(404);
})