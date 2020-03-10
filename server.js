'use strict'
const express = require("express");
const app = express();
const path = require("path");

const port = 3000;

var productData = require("./test-data/example_data.json");

app.use(express.static(path.join(__dirname, "/public")));

app.route('/GET/example-data')
.get((req, res) => {
  res.header("Content-Type",'application/json');
  res.send(JSON.stringify(productData));
})

app.route('/')
.get((req, res) => {
    res.sendFile(__dirname + '/public/index.html');
})

app.listen(port, function() {
console.log(`DL B2D Take Home app is listening on port ${port}!`);
});