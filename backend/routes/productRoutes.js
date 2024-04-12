const { Router } = require("express");

const controllers = require("../controllers/index.js");

const router = Router();

router.get("/", controllers.product.getAllProducts);
// .post(
//   controllers.auth.protect,
//   controllers.auth.authorize,
//   controllers.product.uploadProductImage,
//   controllers.product.createNewProduct
// );

router.get("/:productId", controllers.product.getProductById);
// .delete(
//   controllers.auth.protect,
//   controllers.auth.authorize,
//   controllers.product.deleteProductById
// );

router.use(controllers.auth.protect, controllers.auth.authorize);

router.post(
  "/",
  controllers.product.uploadProductImage,
  controllers.product.createNewProduct
);

router
  .route("/:productId")
  .delete(controllers.product.deleteProductById)
  .patch(
    controllers.product.uploadProductImage,
    controllers.product.updateProductImage,
    controllers.product.updateProductDetails
  );

module.exports = router;
