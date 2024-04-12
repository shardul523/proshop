const mongoose = require("mongoose");
const { decimalFormatter } = require("../utils");

const reviewSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      required: true,
    },
    rating: {
      type: Number,
      required: [true, "A review must have a rating"],
    },
    title: {
      type: String,
      required: [true, "A review must have a title"],
    },
    description: {
      type: String,
      required: [true, "A review must have a description"],
    },
  },
  { timestamps: true }
);

const productSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.ObjectId,
      required: [true],
      ref: "User",
    },
    name: {
      type: String,
      required: [true, "A product must have a name"],
    },
    image: {
      type: String,
      required: [true, "A product must have an image"],
    },
    brand: {
      type: String,
      required: [true, "A product must belong to a brand"],
    },
    category: {
      type: String,
      required: [true, "A product must belong to a category"],
    },
    description: {
      type: String,
      required: [true, "A product must have a description"],
    },
    reviews: [reviewSchema],
    rating: {
      type: Number,
      default: 0,
    },
    numReviews: {
      type: Number,
      default: 0,
    },
    price: {
      type: Number,
      default: 0,
    },
    countInStock: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

productSchema.pre("save", function (next) {
  this.price = decimalFormatter(this.price);
  next();
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
