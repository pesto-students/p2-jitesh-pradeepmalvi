const express = require("express");
const {
  getWeatherByCities,
  getWeatherByCity
} = require("../controllers/controller");

const router = express.Router();

router.route("/cities").post(getWeatherByCities);
router.route("/city").post(getWeatherByCity);

module.exports = router;
