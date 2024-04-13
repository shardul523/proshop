const router = require("express").Router();

const controllers = require("../controllers");

router.use(controllers.auth.protect);

router
  .route("/profile")
  .get(controllers.user.getUserProfile)
  .patch(controllers.user.updateUserProfile);

router.use(controllers.auth.authorize);

router.route("/").get(controllers.user.getAllUsers);

router
  .route("/:userId")
  .delete(controllers.user.deleteUserById)
  .get(controllers.user.getUserById)
  .patch(controllers.user.updateUserById);

module.exports = router;
