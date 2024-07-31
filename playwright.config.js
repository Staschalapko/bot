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
  /* Retry on CI only */
  retries:  0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 4 : 4,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */

  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Maximum time each action such as `click()` can take. Defaults to 0 (no limit). */
    actionTimeout: 15 * 1000,
    /* Base URL to use in actions like `await page.goto('/')`. */
    baseURL: 'https://rem-servis.site/?utm_source=google&utm_medium=cpc&utm_campaign=cid_20976708202&utm_target=&utm_group=gid153377157970&utm_content=%D0%A0%D0%B5%D0%BC%D0%BE%D0%BD%D1%82%20%D0%BD%D0%BE%D1%83%D1%82%D0%B1%D1%83%D0%BA%D0%BE%D0%B2&utm_team=harkiv1&utm_term%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82%20%D0%BD%D0%BE%D1%83%D1%82%D0%B1%D1%83%D0%BA%D0%BE%D0%B2%20%D1%85%D0%B0%D1%80%D1%8C%D0%BA%D0%BE%D0%B2&utm_tab=help-pc&gad_source=1&gclid=Cj0KCQjwwae1BhC_ARIsAK4JfrwnvE1qTnBOmSiaXGRlD2p9KdtWqbjfk8UDF1TOvHUQjNxTRxPbT_EaApGBEALw_wcB',
    headless: true,
    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on',
    video: 'on',
  },
  reporter: 'html',
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
