const express = require("express");
const bodyParser = require("body-parser");
const { response } = require("express");
const path = require('path');
const port = 3000;

const app = express();
app.use(bodyParser.json());
app.use(express.static(__dirname + "/../client/dist"));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'), (err) => {
    if (err) {
      res.status(500).send(err);
    }
  });
});

app.listen(port, () => {
  console.log(`App is running at http://localhost:${port}`);
});