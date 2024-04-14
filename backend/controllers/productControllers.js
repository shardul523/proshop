const multer = require("multer");
const fs = require("fs/promises");
const path = require("path");

const Product = require("../models/productModel");
const {
  catchAsync,
  AppError,
  getProductImageName,
  deleteImage,
} = require("../utils");

const upload = multer();
const productFields = [
  "name",
  "price",
  "countInStock",
  "brand",
  "category",
  "description",
];
const SAMPLE_IMAGE = "/images/sample.jpg";

/**
 * @description UPLOAD PRODUCT IMAGE
 * @route       MIDDLEWARE
 * @access      ADMIN
 */
exports.uploadProductImage = upload.single("product-image");

/**
 * @description Store the image of the file and change the product
 * @route       MIDDLEWARE
 * @access      admin
 */
exports.updateProductImage = catchAsync(async (req, res, next) => {
  if (!req.file) return next();

  const product = await Product.findById(req.params.productId);

  if (!product) return next(new AppError("No such product exists", 400));

  const imageName = getProductImageName(req.file, product._id);

  await fs.writeFile(
    path.join(__dirname, "..", "public", imageName),
    req.file.buffer
  );

  product.image = imageName;

  await product.save();

  next();
});

/**
 * @description   GET ALL THE PRODUCTS
 * @route         GET /api/v1/products
 * @access        PUBLIC
 */
exports.getAllProducts = catchAsync(async function (req, res, next) {
  const pageSize = 5;
  const docCount = await Product.countDocuments();

  const pageNumber = req.query.page || 1;

  const products = await Product.find()
    .limit(pageSize)
    .skip((pageNumber - 1) * pageSize);

  return res
    .status(200)
    .json({ products, count: Math.ceil(docCount / pageSize) });
});

/**
 * @description   Get Product By ID
 * @route         GET /api/v1/products/:productId
 * @access        admin
 */
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
exports.deleteProductById = catchAsync(async (req, res, next) => {
  const product = await Product.findById(req.params.productId);

  if (!product) return next(new AppError("No such product exists", 400));

  const imageFile = product.image;

  if (imageFile !== SAMPLE_IMAGE) {
    await deleteImage(imageFile);
  }

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
exports.createNewProduct = catchAsync(async (req, res, next) => {
  const product = new Product();

  console.log(req.file);

  for (let field of productFields) {
    if (!req.body[field])
      return next(
        new AppError("Not all the necessary fields are present", 400)
      );

    product[field] = req.body[field];
  }

  product.user = req.user._id;
  product.image = SAMPLE_IMAGE;

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

/**
 * @description Edit product details
 * @route       PATCH /api/v1/products/:productId
 * @access      admin
 */
exports.updateProductDetails = catchAsync(async (req, res, next) => {
  const product = await Product.findById(req.params.productId);

  if (!product) return next(new AppError("No such product exists!", 404));

  for (let field of productFields) {
    if (!req.body[field]) continue;
    console.log(req.body[field]);
    product[field] = req.body[field];
  }

  await product.save();

  return res.status(201).json({
    status: "success",
    data: {
      message: "Product updated successfully",
    },
  });
});

/**
 * @description Create a new review
 * @route       POST /products/:productId/reviews
 * @access      private
 */
exports.createNewReview = catchAsync(async (req, res, next) => {
  const product = await Product.findById(req.params.productId);

  if (!product) return next(new AppError("No such product exists", 404));

  const { reviews } = product;

  const { title, description, rating } = req.body;

  const reviewFound = reviews.find(
    (review) => review.user.toString() === req.user._id.toString()
  );

  if (reviewFound) return next(new AppError("Product already reviewed", 400));

  reviews.push({ user: req.user._id, title, description, rating });

  await product.save();

  return res.status(201).json({
    message: "Review added",
    review: reviews.at(-1),
  });
});

/**
 * @description   Get reviews of a product
 * @route         GET /api/v1/products/:productId/reviews
 * @access        public
 */
exports.getReviews = catchAsync(async (req, res, next) => {
  const product = await Product.findById(req.params.productId).populate({
    path: "reviews",
    populate: "user",
  });

  if (!product) return next(new AppError("No such product exists!", 404));

  const reviewsResponse = product?.reviews.map((review) => {
    return {
      user: {
        id: review.user._id,
        name: review.user.name,
      },
      reviewId: review._id,
      rating: review.rating,
      title: review.title,
      description: review.description,
      createdAt: review.createdAt,
    };
  });

  return res.status(200).json({
    reviews: reviewsResponse,
    message: "Reviews returned",
  });
});
