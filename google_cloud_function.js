const puppeteer = require('puppeteer');

exports.convertUrlToPdf = async (req, res) => {
  const { url } = req.query;

  if (!url) {
    return res.status(400).send('Missing URL parameter');
  }

  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  try {
    await page.goto(url, { waitUntil: 'networkidle2' });
    const pdf = await page.pdf();
    res.contentType('application/pdf');
    res.send(pdf);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error generating PDF');
  } finally {
    await browser.close();
  }
};
