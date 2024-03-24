const User = require("../models/userModel");
const { catchAsync } = require("../utils");

exports.signup = catchAsync(function (req, res) {
  res.send("Sign up user");
});

exports.login = catchAsync((req, res) => {
  res.send("Login user");
});

exports.logout = catchAsync((req, res) => {
  res.send("Logout user");
});
