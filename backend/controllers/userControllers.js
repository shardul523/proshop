const User = require("../models/userModel");
const { catchAsync } = require("../utils");

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
  const updateDetails = { name, email };

  if (password) updateDetails.password = password;

  await User.findByIdAndUpdate(req.user._id, updateDetails);

  res.status(200).json({
    status: "success",
    data: { message: "User details updated successfully" },
  });
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
