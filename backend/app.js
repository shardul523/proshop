const express = require("express");

const productRouter = require("./routes/productRoutes");
const errorController = require("./controllers/errorController");

const app = express();

app.use("/api/v1/products", productRouter);

app.use(errorController);

module.exports = app;
