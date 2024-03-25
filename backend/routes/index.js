const router = require("express").Router();

const authRouter = require("./authRoutes");
const usersRouter = require("./userRoutes");
const productsRouter = require("./productRoutes");

router.use("/auth", authRouter);
router.use("/users", usersRouter);
router.use("/products", productsRouter);

module.exports = router;
