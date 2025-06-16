import { test, expect } from '@playwright/test';

test('Verify login with Valid Credential', async ({ page }) => { 

	// Actions
	await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

	await page.locator("input[name='username']").fill("Admin");

	await page.locator("input[type='password']").fill("admin123");

	await page.locator("button[type='submit']").click();

	// Assertions

	await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index");
})

test("verify login with valid username and invalid password", async ({ page }) => {
	// Actions 
	await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
	await page.locator("input[name='username']").fill("Admin");
	await page.locator("input[type='password']").fill("hjdchjdkchjdk");
	await page.locator("button[type='submit']").click();

	//Assertions

	await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
})

test("verify login with invalid username and invalid password", async ({ page }) => {
	// Actions 
	await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
	await page.locator("input[name='username']").fill("cjuhdcjkhc");
	await page.locator("input[type='password']").fill("hjdchjdkchjdk");
	await page.locator("button[type='submit']").click();

	//Assertions

	await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
})


test("verify login with invalid username and valid password", async ({ page }) => {
	// Actions 
	await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
	await page.locator("input[name='username']").fill("cjuhdcjkhc");
	await page.locator("input[type='password']").fill("admin123");
	await page.locator("button[type='submit']").click();

	//Assertions

	await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
})