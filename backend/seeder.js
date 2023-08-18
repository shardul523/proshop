import dotenv from "dotenv";
import colors from "colors";
import connectDB from "./config/db.js";
import users from "./data/users.js";
import products from "./data/products.js";
import User from "./models/userModel.js";
import Product from "./models/productModel.js";
import Order from "./models/orderModel.js";

dotenv.config();

connectDB();

async function deleteData() {
  try {
    await Order.deleteMany(); // Deletes all orders when no argument is passed
    await User.deleteMany();
    await Product.deleteMany();
    console.log("Data destroyed".red.inverse);
  } catch (err) {
    console.log(err.message);
  }
}

async function importData() {
  try {
    await deleteData();

    const createdUsers = await User.insertMany(users);
    console.log("Users created".green.inverse);

    const adminUser = createdUsers.find((user) => user.isAdmin === true);

    const sampleProducts = products.map((product) => ({
      ...product,
      user: adminUser,
    }));

    await Product.insertMany(sampleProducts);
    console.log("Products created".green.inverse);

    process.exit();
  } catch (err) {
    console.log(err.message.red.inverse);
    process.exit(1);
  }
}

if (process.argv.length >= 3 && process.argv[2] === "-d") {
  deleteData().then(
    () => process.exit(),
    () => process.exit(1)
  );
} else {
  importData();
}
