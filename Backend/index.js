const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const app = express();
const cors = require("cors");
const connectToMongodb = require("./db/db");
const userRoutes = require("./routes/user");
const port = process.env.PORT || 8008;

connectToMongodb();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/users", userRoutes);


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
