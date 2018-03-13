const express = require('express');
const request = require('request');

const app = express();
const API_URL = 'https://fragdenstaat.de';

app.use('/api', function(req, res) {
  console.log(req);
  console.log(req.headers);
  var url = API_URL + req.url;
  req.pipe(request(url)).pipe(res);
});


app.listen(5000);
