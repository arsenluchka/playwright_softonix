import { test, expect } from '@playwright/test';

const url = "https://jsonplaceholder.typicode.com/";

test("PUT Update item", async ({request})=>{
    const response = await request.put(url+"/posts/1", {
        data:{
            id: 1,
            title: 'foo',
            body: 'bar',
            userId: 10
        }
    });
    console.log(await response.json())
    expect(response.status()).toEqual(200);
});

test("PUT Update using incorrect request ", async ({request})=>{
    const response = await request.put(url+"/posts", {
        data:{
            id: 1,
            title: 'foo',
            body: 'bar',
            userId: 10
        }
    });
    console.log(await response.json())
    expect(response.status()).toEqual(404);
});