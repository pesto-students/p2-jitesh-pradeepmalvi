const express = require("express");
const {
  getWeatherByCities,
  getWeatherByCity,
  getForcastByDays,
  getForcastByDate
} = require("../controllers/controller");

const router = express.Router();

router.route("/weather/cities").post(getWeatherByCities);
router.route("/weather/city").post(getWeatherByCity);
router.route("/forecast/days").post(getForcastByDays);
router.route("/forecast/date").post(getForcastByDate);

module.exports = router;
