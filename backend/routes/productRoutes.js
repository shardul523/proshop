const { Router } = require("express");

const controllers = require("../controllers/index.js");

const router = Router();

router.get("/", controllers.product.getAllProducts);

router.get("/:productId", controllers.product.getProductById);

router.get("/:productId/reviews", controllers.product.getReviews);

router.use(controllers.auth.protect);

router.post("/:productId/reviews", controllers.product.createNewReview);

router.use(controllers.auth.authorize);

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
