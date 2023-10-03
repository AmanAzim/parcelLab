const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const routes = require("./src/routes");
const { seedDb } = require("./seed");

const DB_URI = process.env.MONGO_DB_URL;
const PORT = process.env.PORT || 5000;
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(routes);

mongoose.connect(DB_URI).then(async () => {
  await seedDb();
  console.log("Listening on port: " + PORT);
  app.listen(PORT);
});
