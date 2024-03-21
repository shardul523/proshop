const Product = require("../models/productModel");
const { catchAsync, AppError } = require("../utils");

exports.getAllProducts = catchAsync(async function (req, res, next) {
  const products = await Product.find();

  return res.status(200).json({
    status: "success",
    data: { products },
  });
});

exports.getProductById = catchAsync(async function (req, res, next) {
  const { productId } = req.params;

  const product = await Product.findById(productId);

  if (!product) return next(new AppError("No such product exists", 404));

  return res.status(200).json({
    status: "success",
    data: { product },
  });
});
