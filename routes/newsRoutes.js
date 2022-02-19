const express = require("express");
const newsController = require("../controller/newsController");

const router = express.Router();

router
  .route("/")
  .get(newsController.getAllTours)
  .post(newsController.createTour);

module.exports = router;
