const color = require("@colors/colors");
require("dotenv").config();

const { connectDB } = require("./config/db");

const Order = require("./models/orderModel");
const Product = require("./models/productModel");
const User = require("./models/userModel");

const users = require("./data/users");
const products = require("./data/products");

connectDB();

async function importSampleData() {
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    const createdUsers = await Promise.all(
      users.map((user) => User.create(user))
    );

    const sampleProducts = products.map((product) => {
      return { ...product, user: createdUsers[0]._id };
    });

    await Product.insertMany(sampleProducts);

    console.log("Data imported successfully".green.inverse);
    process.exit(0);
  } catch (err) {
    console.log(err);
    console.log("Data could not be imported successfully!".red.inverse);
    process.exit(1);
  }
}

async function deleteSampleData() {
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    console.log("Data destroyed successfully".green.inverse);
    process.exit(0);
  } catch (err) {
    console.log(err);
    console.log("Data could not be destroyed successfully".red.inverse);
    process.exit(1);
  }
}

if (process.argv[2] === "data:import") importSampleData();
if (process.argv[2] === "data:destroy") deleteSampleData();
