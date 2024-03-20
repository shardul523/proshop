require("dotenv").config();

const { connectDB } = require("./config/db");

connectDB();

const PORT = process.env.PORT || 5000;

const app = require("./app");

app.listen(PORT, () => {
  console.log("Server started at port", PORT);
});
