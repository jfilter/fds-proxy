const express = require('express');
const request = require('request');

const app = express();
const API_URL = 'https://fragdenstaat.de';

app.use('/', function(req, res) {
  console.log(req.url);
  console.log(req.path);
  console.log(req.headers);
  const url = API_URL + req.path;
  console.log(url);
  req.pipe(request(url)).pipe(res);
});


app.listen(5000);
