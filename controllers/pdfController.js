const puppeteer = require('puppeteer');

async function convertUrlToPdf(req, res, next) {
  const { url } = req.query;

  if (!url) {
    return res.status(400).send('Missing required parameter: url');
  }

  try {
    // Launch a new instance of headless Chrome
    const browser = await puppeteer.launch();

    // Open a new tab in the browser
    const page = await browser.newPage();

    // Navigate to the given URL
    await page.goto(url);

    // Generate a PDF of the page and return it as a buffer
    const pdf = await page.pdf({ format: 'A4' });

    // Close the browser instance
    await browser.close();

    res.set({
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'attachment; filename="output.pdf"',
    });

    res.send(pdf);
  } catch (error) {
    next(error);
  }
}

module.exports = { convertUrlToPdf };
