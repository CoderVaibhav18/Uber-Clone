require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const cookiesParser = require("cookie-parser");
const connectToMongodb = require("./db/db");
const userRoutes = require("./routes/user");
const captainRoutes = require("./routes/captain");
const port = process.env.PORT || 8008;

connectToMongodb();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookiesParser());

app.use("/users", userRoutes);
app.use("/captain", captainRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
