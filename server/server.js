const express = require('express');
const path = require("path");

const app = express();

// Serve static files from the client/dist directory
app.use(express.static(path.join(__dirname, '../client/dist')));

// Define a route to serve the index.html file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Now listening on port: ${PORT}`);
});













