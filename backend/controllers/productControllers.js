const multer = require("multer");
const fs = require("fs/promises");
const path = require("path");

const Product = require("../models/productModel");
const { catchAsync, AppError, getProductImageName } = require("../utils");

const upload = multer();

/**
 * @description UPLOAD PRODUCT IMAGE
 * @route       MIDDLEWARE
 * @access      ADMIN
 */
exports.uploadProductImage = upload.single("product-image");

/**
 * @description   GET ALL THE PRODUCTS
 * @route         GET /api/v1/products
 * @access        PUBLIC
 */
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

/**
 * @desc    DELETE PRODUCT BY ID
 * @route   DELETE /api/v1/products/:productId
 * @access  ADMIN
 */
exports.deleteProductById = catchAsync(async (req, res) => {
  await Product.findByIdAndDelete(req.params.productId);

  return res.status(204).json({
    status: "success",
    data: {
      message: "Product Deleted",
    },
  });
});

/**
 * @desc    CREATE A NEW PRODUCT
 * @route   POST /api/v1/products
 * @access  ADMIN
 */
exports.createNewProduct = catchAsync(async (req, res) => {
  const product = new Product();

  console.log(req.file);

  product.name = req.body.name;
  product.price = req.body.price;
  product.countInStock = req.body.countInStock;
  product.brand = req.body.brand;
  product.category = req.body.category;
  product.description = req.body.description;
  product.user = req.user._id;
  product.image = "http://localhost:8000/images/sample.png";

  const createdProduct = await product.save();

  if (req.file) {
    const imageName = getProductImageName(req.file, createdProduct._id);
    await fs.writeFile(
      path.join(__dirname, "..", "public", imageName),
      req.file.buffer
    );

    createdProduct.image = imageName;
  }

  await createdProduct.save();

  res.status(201).json({
    status: "success",
    data: {
      product: createdProduct,
    },
  });
});
