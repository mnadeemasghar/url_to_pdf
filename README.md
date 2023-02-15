# Convert URLs to PDFs

This is a Node.js application that allows you to convert URLs to PDFs using Puppeteer and Express.

## Installation

To install this application, you'll need to have Node.js installed on your system. Once you have Node.js installed, you can follow these steps:

1. Clone this repository to your local machine:
   ```bash
   git clone https://github.com/your-username/convert-urls-to-pdfs.git

2. Navigate to the root directory of the project:
    ```bash
    cd convert-urls-to-pdfs

3. Install the required dependencies using npm:
    ```bash
    npm install

## Usage
To start the application, run the following command:

    npm start

This will start the server on port 3000 (or the port specified in the PORT environment variable). You can then convert URLs to PDFs by visiting `http://localhost:3000/pdf?url=<url>` in your web browser, where <url> is the URL you want to convert to a PDF.

For example, to convert the URL https://www.google.com to a PDF, you would visit `http://localhost:3000/pdf?url=https://www.google.com` in your web browser.
