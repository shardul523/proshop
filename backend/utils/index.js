const fs = require("fs/promises");
const path = require("path");

exports.catchAsync = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};

exports.AppError = require("./AppError");

exports.getProductImageName = (file, orderId) => {
  const ext = file.mimetype.replace("image/", "");
  const name = `/images/products/${orderId}.${ext}`;
  console.log(name);
  return name;
};

exports.decimalFormatter = (num) => {
  return +(Math.round(num * 100) / 100).toFixed(2);
};

exports.deleteImage = async (image) => {
  await fs.unlink(path.join(__dirname, "..", "public", image));
};
