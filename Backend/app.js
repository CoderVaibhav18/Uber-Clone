require('dotenv').config();
const express = require("express");
const app = express();
const cors = require("cors");
const connectToMongodb = require('./db/db');

connectToMongodb()
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

module.exports = { app };
