const router = require("express").Router();

const authRouter = require("./authRoutes");
const usersRouter = require("./userRoutes");
const productsRouter = require("./productRoutes");
const ordersRouter = require("./orderRoutes");

router.use("/auth", authRouter);
router.use("/users", usersRouter);
router.use("/products", productsRouter);
router.use("/order", ordersRouter);

module.exports = router;
