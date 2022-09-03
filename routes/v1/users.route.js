const express = require("express");
const usersControllers = require("../../controllers/users.controller");
const limiter = require("../../middleware/limiter");
const viewCount = require("../../middleware/veiwCount");

const router = express.Router();

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
  .route("/:id")
  .patch(usersControllers.updateById)

  router
  .route("/:id1/:id2/:id3/:id4/:id5")
  .patch(usersControllers.updateByMultipleId)

  router
  .route("/:id")
  .delete(usersControllers.deleteById)


module.exports = router;
