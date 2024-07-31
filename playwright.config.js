/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
require('dotenv').config();

/**
 * @see https://playwright.dev/docs/test-configuration
 * @type {import('@playwright/test').PlaywrightTestConfig}
 */
const config = {
  testDir: './tests',
  /* Maximum time one test can run for. */
  timeout: process.env.CI ? 120 * 1000 : 80 * 1000,
  expect: {
    /**
     * Maximum time expect() should wait for the condition to be met.
     * For example in `await expect(locator).toHaveText();`
     */
    timeout: 15000,
  },
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 3 : 3,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */

  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Maximum time each action such as `click()` can take. Defaults to 0 (no limit). */
    actionTimeout: 15 * 1000,
    /* Base URL to use in actions like `await page.goto('/')`. */
    baseURL: 'https://rem-servis.site/lend/ru/',
    headless: true,
    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
    video: 'on-first-retry',
  },
  projects: [
    {
      name: 'chrome',
      expect: {},
      use: {
        browserName: 'chromium',
        channel: 'chrome',
        viewport: {
          height: 969,
          width: 1920,
        },
        launchOptions: {
          ignoreDefaultArgs: ['--hide-scrollbars'],
        },
        contextOptions: {
          // chromium-specific permissions
          permissions: ['clipboard-read', 'clipboard-write'],
        },
      },
    },
  ],
};

module.exports = config;
