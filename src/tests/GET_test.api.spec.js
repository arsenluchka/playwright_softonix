import { test, expect } from '@playwright/test';

const url = "https://jsonplaceholder.typicode.com/";

test("GET All", async ({request})=>{
    const response = await request.get(url+"/posts");
    console.log(await response.json())
    expect(response.status()).toEqual(200);
});

test("GET first item", async ({request})=>{
    const response = await request.get(url+"/posts/1");
    expect(response.status()).toEqual(200);
});

test("GET non-existent item", async ({request})=>{
    const response = await request.get(url+"/posts/101");
    console.log(await response.json())
    expect(response.status()).toEqual(404);
});