import Puppeteer from 'puppeteer';

import { TEST_BASE_URL } from '../config/constantest';

describe('H1 Text', () => {
  it('h1 loads correctly', async () => {
    const browser = await Puppeteer.launch({ args: ['--no-sandbox'] });
    const page = await browser.newPage();

    page.emulate({
      viewport: {
        width: 500,
        height: 2400
      },
      userAgent: ''
    });

    await page.goto(TEST_BASE_URL);
    await page.waitForSelector('.app-title');

    const html = await page.$eval('.app-title', e => e.innerHTML);
    expect(html).toBe('Welcome to React');

    browser.close();
  }, 16000);
});
