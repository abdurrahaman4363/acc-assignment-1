const express = require("express");
const usersControllers = require("../../controllers/users.controller");
const limiter = require("../../middleware/limiter");
const viewCount = require("../../middleware/veiwCount");

const router = express.Router();

/* 
router
  .route("/")
  .get(usersControllers.getAllUsers)
  .post(usersControllers.saveAUser);

router
  .route("/:id")
  .get(viewCount, limiter, usersControllers.getUserDetail)
  .patch(usersControllers.updateUser)
  .delete(usersControllers.deleteUser);
 */
  router
  .route("/")
  .get(usersControllers.getAllUser)

  router
  .route("/:id")
  .get(usersControllers.getRandomUser)

  router
  .route("/")
  .post(usersControllers.saveInfo)

  router
  .route("/")
  .patch(usersControllers.saveInfo)


module.exports = router;
