import { test, expect } from '@playwright/test';

const url = "https://jsonplaceholder.typicode.com/";

test("POST Create item", async ({request})=>{
    const response = await request.post(url+"/posts", {
        data:{
            title: 'foo',
            body: 'bar',
            userId: 150
        }
    });
    console.log(await response.json())
    expect(response.status()).toEqual(201);
});

test("POST Create item without param", async ({request})=>{
    const response = await request.post(url+"/posts");
    console.log(await response.json())
    expect(response.status()).toEqual(400);
});

