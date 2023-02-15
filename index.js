const express = require('express');
const pdfController = require('./controllers/pdfController');

const app = express();
const port = process.env.PORT || 3000;

// Define a route that maps to the convertUrlToPdf function in the pdfController
app.get('/pdf', pdfController.convertUrlToPdf);

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
