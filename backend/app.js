const express = require("express");
const cookieParser = require("cookie-parser");
const path = require("path");

const rootRouter = require("./routes");
const errorController = require("./controllers/errorController");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/api/v1", rootRouter);

app.use(errorController);

module.exports = app;
