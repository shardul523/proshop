const router = require("express").Router();

const controllers = require("../controllers");

router.use(controllers.auth.protect);

router
  .route("/")
  .get(controllers.auth.authorize, controllers.order.getAllOrders)
  .post(controllers.order.createNewOrder);

router.get("/my-orders", controllers.order.getMyOrders);

router.get("/:orderId", controllers.order.getOrderById);
router.patch("/:orderId/pay", controllers.order.updateOrderToPaid);
router.patch("/:orderId/deliver", controllers.order.updateOrderToDelivered);

module.exports = router;
