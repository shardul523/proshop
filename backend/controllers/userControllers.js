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
exports.getAllUsers = catchAsync(async (req, res) => {
  const users = await User.find().select("-password");
  res.status(200).json({
    status: "success",
    data: { users },
  });
});

/**
 * @desc     DELETE THE USER PROFILE BY ID
 * @route    DELETE /users/:userId
 * @access   ADMIN
 */
exports.deleteUserById = catchAsync(async (req, res, next) => {
  const user = User.findById(req.params.userId);

  if (user.isAdmin)
    return next(new AppError("Admin users cannot be deleted", 400));

  await User.findByIdAndDelete(user._id);

  return res.status(201).json({
    status: "success",
    data: {
      message: "User deleted successfully",
      user,
    },
  });
});

/**
 * @desc     GET THE USER PROFILE BY ID
 * @route    GET /users/:userId
 * @access   ADMIN
 */
exports.getUserById = catchAsync(async (req, res, next) => {
  const user = await User.findById(req.params.userId);

  if (!user) return next(new AppError("No such user exists", 404));

  return res.status(200).json({ user });
});

/**
 * @description Update the user profile by ID
 * @route       PATCH /users/:userId
 * @access      admin
 */
exports.updateUserById = catchAsync(async (req, res, next) => {
  const { email, password, isAdmin } = req.body;

  const user = await User.findById(req.params.userId);

  if (!user) return next(new AppError("No such user exists", 404));

  if (email) user.email = email;
  if (password) user.password = password;
  if (isAdmin === true || isAdmin === false) user.isAdmin = isAdmin;

  await user.save();

  return res.status(201).json({
    message: "User updated successfully",
  });
});
