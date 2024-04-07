const User = require("../models/userModel");
const { catchAsync, AppError } = require("../utils");

/**
 * @desc     GET THE CURRENT USERS PROFILE
 * @route    GET /users/profile
 * @access   PRIVATE
 */
exports.getUserProfile = (req, res) => {
  const user = {
    name: req.user.name,
    email: req.user.email,
    isAdmin: req.user.isAdmin,
    _id: req.user._id,
  };

  res.status(200).json({
    status: "success",
    data: { user },
  });
};

/**
 * @desc     UPDATE THE CURRENT USERS PROFILE
 * @route    PATCH /users/profile
 * @access   PRIVATE
 */
exports.updateUserProfile = catchAsync(async (req, res) => {
  const { name, email, password } = req.body;

  const user = await User.findById(req.user._id);

  if (name) user.name = name;
  if (email) user.email = email;
  if (password) user.password = password;

  try {
    await user.save();
    return res.status(200).json({
      status: "success",
      data: { message: "User details updated successfully" },
    });
  } catch (err) {
    return next(err);
  }
  // await User.findByIdAndUpdate(req.user._id, updateDetails);
});

/**
 * @desc     GET ALL REGISTERED USERS
 * @route    GET /users
 * @access   ADMIN
 */
exports.getAllUsers = catchAsync((req, res) => {
  res.send("Get all users");
});

/**
 * @desc     DELETE THE USER PROFILE BY ID
 * @route    DELETE /users/:userId
 * @access   ADMIN
 */
exports.deleteUserById = catchAsync((req, res) => {
  res.send("Deleting User Profile");
});

/**
 * @desc     GET THE USER PROFILE BY ID
 * @route    GET /users/:userId
 * @access   ADMIN
 */
exports.getUserById = catchAsync((req, res) => {
  res.send("Get User by given Id");
});
