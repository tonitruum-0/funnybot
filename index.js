
const puppeteer = require('puppeteer');
const puppeteerExtra = require('puppeteer-extra');
const stealthPlugin = require('puppeteer-extra-plugin-stealth');
const adblockerPlugin = require('puppeteer-extra-plugin-adblocker');


puppeteerExtra.use(stealthPlugin());
puppeteerExtra.use(adblockerPlugin());
(async () => {
    const browser = await puppeteerExtra.launch({
      headless: false, // Set to true for headless mode
      args: [
        '--disable-notifications',
        '--disable-geolocation',
        '--disable-infobars',
        '--disable-web-security',
        '--disable-features=site-per-process',
        '--no-sandbox',
        '--disable-setuid-sandbox',
      ],
    });
  
  
    const page = await browser.newPage();


  // Navigate the page to a URL
  await page.goto(
    'https://www.silive.com/highschoolsports/2023/09/hs-football-poll-who-will-be-the-best-defensive-player-on-si-this-season.html'
  );


  // Set screen size
  await page.setViewport({ width: 1080, height: 1024 });


  while (true) {
    const button = '#PDI_answer57526153';
    await page.waitForSelector(button);
    await page.click(button);
    await page.click('#pd-vote-button12784744');
    //refresh page
    await page.reload();
  }
  // Wait and click on first result


  // Print the full title


  await browser.close();
})();
