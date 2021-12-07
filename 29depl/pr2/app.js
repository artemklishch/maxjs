const express = require("express");
const bosyParser = require("body-parser");

const locationRoutes = require("./routes/location");

const app = express();

app.use(bosyParser.json());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});
app.use(locationRoutes);

app.listen(3000);
