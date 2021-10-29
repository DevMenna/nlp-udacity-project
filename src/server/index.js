const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const fetch = require("cross-fetch");
const FormData = require("form-data");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("dist"));

// Add headers
app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader("Access-Control-Allow-Origin", "*");

  // Request methods you wish to allow
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );

  // Request headers you wish to allow
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader("Access-Control-Allow-Credentials", true);

  // Pass to next layer of middleware
  next();
});

app.get("/", function (req, res) {
  // res.sendFile('dist/index.html')
  res.sendFile(path.resolve("src/client/views/index.html"));
});

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
  console.log("Example app listening on port 8080!");
});

app.post("/nlp", async function (req, res) {
  const { topic } = req.body;
  const formdata = new FormData();
  formdata.append("key", process.env.API_KEY);
  formdata.append("txt", topic);
  formdata.append("lang", "en");

  const requestOptions = {
    method: "POST",
    body: formdata,
    redirect: "follow",
  };

  const response = await fetch(
    "https://api.meaningcloud.com/topics-2.1",
    requestOptions
  );

  const data = await response.json();

  res.send(data);
});
