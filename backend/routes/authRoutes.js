const router = require("express").Router();

const controllers = require("../controllers");

router.post("/signup", controllers.auth.signup);

router.post("/login", controllers.auth.login);

router.delete("/logout", controllers.auth.protect, controllers.auth.logout);

module.exports = router;
