const mongoose = require("mongoose");

const CONN_URI = process.env.MONGO_URI.replace(
  "<password>",
  process.env.MONGO_PASS
);

exports.connectDB = async function () {
  try {
    await mongoose.connect(CONN_URI);
    console.log("Databse connected");
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};
