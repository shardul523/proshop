const Order = require("../models/orderModel");
const { AppError, catchAsync } = require("../utils");

/**
 * @desc    CREATE A NEW ORDER
 * @route   POST /api/v1/orders
 * @access  PRIVATE
 */
exports.createNewOrder = catchAsync(async (req, res, next) => {
  const { cart } = req.body;
  const { cartItems: orderItems, shippingAddress, paymentMethod } = cart;
  const user = req.user._id;

  // console.log(orderItems, shippingAddress, paymentMethod);

  if (!orderItems || orderItems.length === 0)
    return next(new AppError("No order items found!", 400));

  const newOrder = await Order.create({
    user,
    orderItems,
    shippingAddress,
    paymentMethod,
  });

  res.status(201).json({
    status: "success",
    data: { order: newOrder },
  });
});

/**
 * @desc    GET CURRENT USER'S ORDERS
 * @route   GET /api/v1/orders/my-orders
 * @access  PRIVATE
 */
exports.getMyOrders = catchAsync(async (req, res, next) => {
  const orders = await Order.find({ user: req.user._id });

  if (!orders) return next(new AppError("No orders found", 404));

  res.status(200).json({
    status: "success",
    data: { orders },
  });
});

/**
 * @desc    GET ORDER BY ID
 * @route   GET /api/v1/orders/:orderId
 * @access  PRIVATE
 */
exports.getOrderById = catchAsync(async (req, res, next) => {
  const order = await Order.findById(req.params.orderId);

  if (!order) return next(new AppError("No order found with given id", 404));

  res.status(200).json({
    status: "success",
    data: { order },
  });
});

/**
 * @desc    GET ALL ORDERS
 * @route   GET /api/v1/orders
 * @access  ADMIN
 */
exports.getAllOrders = catchAsync(async (req, res) => {
  const orders = await Order.find();

  res.status(200).json({
    status: "success",
    data: { orders },
  });
});

/**
 * @desc    UPDATE ORDER STATUS TO PAID
 * @route   PATCH /api/v1/orders/:orderId/pay
 * @access  PRIVATE
 */
exports.updateOrderToPaid = catchAsync(async (req, res) => {
  res.send("GIVEN ORDER IS PAID");
});

/**
 * @desc    UPDATE ORDER STATUS TO PAID
 * @route   PATCH /api/v1/orders/:orderId/delivery
 * @access  PRIVATE/ADMIN
 */
exports.updateOrderToDelivered = catchAsync(async (req, res) => {
  res.send("Mark order as delivered");
});
