const User = require("../models/userModel");
const { catchAsync } = require("../utils");

/**
 * @desc   SIGN UP NEW USERS
 * @route  POST /auth/signup
 * @access PUBLIC
 */
exports.signup = catchAsync(function (req, res) {
  res.send("Sign up user");
});

/**
 * @desc    LOGIN USERS
 * @route   POST /auth/login
 * @access  PUBLIC
 */
exports.login = catchAsync((req, res) => {
  res.send("Login user");
});

/**
 * @desc    LOGOUT USERS
 * @route   DELETE /auth/logout
 * @access  PRIVATE
 */
exports.logout = catchAsync((req, res) => {
  res.send("Logout user");
});

/**
 * @desc    AUTHENTICATE USERS
 * @route   MIDDLEWARE
 * @access  PUBLIC
 */
exports.protect = catchAsync((req, res, next) => {
  console.log("Authenticating User");
  next();
});

/**
 * @desc    AUTHORIZE USERS
 * @route   MIDDLEWARE FACTORY
 * @access  PRIVATE
 */
exports.authorize = (...roles) =>
  catchAsync((req, res, next) => {
    console.log("Authorizes", ...roles);
    next();
  });
