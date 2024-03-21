const { Router } = require("express");

const {
  getAllProducts,
  getProductById,
} = require("../controllers/productControllers");

const router = Router();

router.route("/").get(getAllProducts);

router.route("/:productId").get(getProductById);

module.exports = router;
