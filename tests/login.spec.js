const { test } = require('@playwright/test');
const { BasePage } = require('../pages/base-page');


test('Call', async ({ page }) => {
  const basePage = new BasePage(page);
  await basePage.goto();
  await basePage.clickCall();
  await basePage.enterData();
  await basePage.clickSubmit();
});

test('Call2', async ({ page }) => {
  const basePage = new BasePage(page);
  await basePage.goto();
  await basePage.clickCall();
  await basePage.enterData();
  await basePage.clickSubmit();
});

test('Call3', async ({ page }) => {
  const basePage = new BasePage(page);
  await basePage.goto();
  await basePage.clickCall();
  await basePage.enterData();
  await basePage.clickSubmit();
});

test('Call4', async ({ page }) => {
  const basePage = new BasePage(page);
  await basePage.goto();
  await basePage.clickCall();
  await basePage.enterData();
  await basePage.clickSubmit();
});
