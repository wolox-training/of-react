import Faker from 'faker';
import Puppeteer from 'puppeteer';

import { TEST_BASE_URL } from '../../../../../config/test';

import { FIELDS } from './constants';

const person = {
  firstName: Faker.name.firstName(),
  lastName: Faker.name.lastName(),
  email: Faker.internet.email()
};

describe('Signup Form (use FIELDS constants)', () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await Puppeteer.launch({ args: ['--no-sandbox'] });
  }); // start the browser

  beforeEach(async () => {
    page = await browser.newPage();
  }); // go to root page

  afterAll(() => {
    browser.close();
  }); // close browesr

  it('Can submit signup form', async () => {
    page.emulate({
      viewport: {
        width: 500,
        height: 900
      },
      userAgent: ''
    });

    await page.goto(TEST_BASE_URL);
    await page.$eval('.signup-form', form => form.submit());
  });

  it(
    'Successful submit',
    async () => {
      page.emulate({
        viewport: {
          width: 500,
          height: 900
        },
        userAgent: ''
      });

      await page.goto(TEST_BASE_URL);
      await page.waitForSelector('.signup-form');

      await page.click(`input[name=${FIELDS[0].name}]`);
      await page.type(`input[name=${FIELDS[0].name}]`, person.firstName);

      await page.click(`input[name=${FIELDS[1].name}]`);
      await page.type(`input[name=${FIELDS[1].name}]`, person.lastName);

      await page.click(`input[name=${FIELDS[2].name}]`);
      await page.type(`input[name=${FIELDS[2].name}]`, person.email);

      await page.click('button[type=submit]');

      const html = await page.$eval('.result', e => e.innerHTML);
      expect(html).toBe('User has been created successfully');
    },
    16000
  );

  it(
    '3 fields are required',
    async () => {
      page.emulate({
        viewport: {
          width: 500,
          height: 900
        },
        userAgent: ''
      });

      await page.goto(TEST_BASE_URL);
      await page.waitForSelector('.signup-form');

      await page.click('button[type=submit]');

      const html = await page.$eval(`.error-${FIELDS[0].name}`, e => e.innerHTML);
      expect(html).toBe('Required');

      const html1 = await page.$eval(`.error-${FIELDS[1].name}`, e => e.innerHTML);
      expect(html1).toBe('Required');

      const html2 = await page.$eval(`.error-${FIELDS[2].name}`, e => e.innerHTML);
      expect(html2).toBe('Required');
    },
    16000
  );

  xit('First name is required', async () => {}, 16000);

  xit('Last name is required', async () => {}, 16000);

  xit('Email is required', async () => {}, 16000);
});
