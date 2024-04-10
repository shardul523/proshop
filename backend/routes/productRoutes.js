const { Router } = require("express");

const controllers = require("../controllers/index.js");

const router = Router();

router.route("/").get(controllers.product.getAllProducts);

router
  .route("/:productId")
  .get(controllers.product.getProductById)
  .delete(
    controllers.auth.protect,
    controllers.auth.authorize,
    controllers.product.deleteProductById
  );

module.exports = router;
