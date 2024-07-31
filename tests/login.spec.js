const { test } = require('@playwright/test');
const { BasePage } = require('../pages/base-page');

const runTestMultipleTimes = async (testFunction, times) => {
  for (let i = 0; i < times; i++) {
    await testFunction();
  }
};

const runCallTest = async (page) => {
  const basePage = new BasePage(page);
  await basePage.goto();
  await basePage.clickCall();
  await basePage.enterData();
  await basePage.clickSubmit();
};

test('Call', async ({ page }) => {
  await runTestMultipleTimes(async () => {
    await runCallTest(page);
  }, 1000);
});

test('Call2', async ({ page }) => {
  await runTestMultipleTimes(async () => {
    await runCallTest(page);
  }, 1000);
});

test('Call3', async ({ page }) => {
  await runTestMultipleTimes(async () => {
    await runCallTest(page);
  }, 1000);
});

test('Call4', async ({ page }) => {
  await runTestMultipleTimes(async () => {
    await runCallTest(page);
  }, 1000);
});