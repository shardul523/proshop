const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

const { catchAsync, AppError } = require("../utils");

const jwtSign = (payload, expiresIn = "1d") => {
  return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn });
};

const sendToken = (userId, res) => {
  const expiresIn = 30 * 24 * 60 * 60 * 1000;

  const token = jwtSign({ userId });

  res.cookie("jwt", token, {
    maxAge: expiresIn,
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
  });

  return res.status(201).json({
    status: "success",
    data: { message: "Logged In Successfully" },
  });
};

/**
 * @desc   SIGN UP NEW USERS
 * @route  POST /auth/signup
 * @access PUBLIC
 */
exports.signup = catchAsync(async function (req, res) {
  const { name, email, password } = req.body;

  const newUser = await User.create({ name, email, password });

  sendToken(newUser._id, res);
});

/**
 * @desc    LOGIN USERS
 * @route   POST /auth/login
 * @access  PUBLIC
 */
exports.login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await user.passwordVerify(password)))
    return sendToken(user._id, res);

  next(new AppError("Invaild email / password", 401));
});

/**
 * @desc    LOGOUT USERS
 * @route   DELETE /auth/logout
 * @access  PRIVATE
 */
exports.logout = catchAsync((req, res) => {
  res.cookie("jwt", "loggedout", {
    expires: new Date(0),
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
  });

  res.status(200).json({
    status: "Logout successful",
  });
});

/**
 * @desc    AUTHENTICATE USERS
 * @route   MIDDLEWARE
 * @access  PUBLIC
 */
exports.protect = catchAsync((req, res, next) => {
  console.log("Authenticating User");

  let token;

  if (req.cookies.jwt) token = req.cookies.jwt;

  if (!token) return next(new AppError("Please sign in to access this route"));

  jwt.verify(token, process.env.JWT_SECRET, async (err, decoded) => {
    if (err) return next(err);

    const { userId } = decoded;

    const user = await User.findById(userId).select("-password");

    if (!user) return next(new AppError("Invalid Token", 404));

    console.log("User authenticated");
    req.user = user;

    next();
  });
});

/**
 * @desc    AUTHORIZES ADMIN
 * @route   MIDDLEWARE FACTORY
 * @access  PRIVATE
 */
exports.authorize = (req, res, next) => {
  if (req.user.isAdmin) return next();
  next(new AppError("You are not authorized to access this route", 401));
};
