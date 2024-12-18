const mongoose = require("mongoose");

const connectToMongodb = () => {
  // console.log(process.env.MONGO_URL);

  mongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.log("Mongodb connected successfully"))
    .catch((err) => console.log(err));
};

module.exports = connectToMongodb;
