const { catchAsync } = require("../utils");

/**
 * @desc     GET THE CURRENT USERS PROFILE
 * @route    GET /users/profile
 * @access   PRIVATE
 */
exports.getUserProfile = catchAsync((req, res) => {
  res.send("Get User Profile");
});

/**
 * @desc     UPDATE THE CURRENT USERS PROFILE
 * @route    PATCH /users/profile
 * @access   PRIVATE
 */
exports.updateUserProfile = catchAsync((req, res) => {
  res.send("Update User Profile");
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
