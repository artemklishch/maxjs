const express = require("express");
const bosyParser = require("body-parser");

const locationRoutes = require("./routes/location");

const app = express();

app.use(bosyParser.json());
app.use(locationRoutes);

app.listen(3000);
