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
app.use(express.static(path.join(__dirname, "..", "frontend", "dist")));

app.use("/api/v1", rootRouter);

if (process.env.NODE_ENV === "production")
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "frontend", "dist", "index.html"));
  });

app.use(errorController);

module.exports = app;
