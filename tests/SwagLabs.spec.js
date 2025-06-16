import { test, expect } from '@playwright/test';
test(" verify login with valid credentials", async ({ page }) => {

    //Actions

    await page.goto("https://www.saucedemo.com/v1/");
    await page.locator("input[data-test='username']").fill("standard_user");
    await page.locator("input[type='password']").fill("secret_sauce");
    await page.locator("input[type='submit']").click("On Login")

    // Assertions
    await expect(page).toHaveURL("https://www.saucedemo.com/v1/inventory.html")

})

test("verify login with invalid username and valid password credentials", async ({ page }) => {

    //Actions

    await page.goto("https://www.saucedemo.com/v1/");
    await page.locator("input[data-test='username']").fill("dkjchsjckskj");
    await page.locator("input[type='password']").fill("secret_sauce");
    await page.locator("input[type='submit']").click()

    // Assertions
    await expect(page.locator("button.error-button")).toBeVisible();

})

test("verify login with valid username and invalid password credentials", async ({ page }) => {

    //Actions

    await page.goto("https://www.saucedemo.com/v1/");
    await page.locator("input[data-test='username']").fill("standard_user");
    await page.locator("input[type='password']").fill("secret_saucdce");
    await page.locator("input[type='submit']").click()

    // Assertions
    await expect(page.locator("button.error-button")).toBeVisible();

})

test("verify login with invalid username and invalid password credentials", async ({ page }) => {

    //Actions

    await page.goto("https://www.saucedemo.com/v1/");
    await page.locator("input[data-test='username']").fill("bnvgvh");
    await page.locator("input[type='password']").fill("hjgh");
    await page.locator("input[type='submit']").click()

    // Assertions
    await expect(page.locator("button.error-button")).toBeVisible();

})

