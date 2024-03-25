const express = require("express");

const rootRouter = require("./routes");
const errorController = require("./controllers/errorController");

const app = express();

app.use("/api/v1", rootRouter);

app.use(errorController);

module.exports = app;
