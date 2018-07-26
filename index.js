const express = require("express");
const request = require("request");
const cors = require("cors");

const app = express();
const API_URL = "https://fragdenstaat.de";

app.use(cors());

app.use("/", function(req, res) {
  const url = API_URL + req.path;
  req.pipe(request(url)).pipe(res);
});

app.listen(5000);
