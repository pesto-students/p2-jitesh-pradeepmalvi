const axios = require("axios");
const { getAllUrls } = require("../utils");

const getWeatherByCities = async (req, res) => {
  try {
    const { cities } = req.body;

    if (!cities) {
      res.send({ status: false, message: "invalid city" });
    }
    if (cities.length === 0) {
      res.send({ status: false, message: "city required" });
    }

    Promise.all(getAllUrls(cities, res))
      .then(function (values) {
        let data = [];
        values.map(v => data.push({ ...v.data.location, ...v.data.current }));
        res.send({ status: true, length: cities.length, data });
      })
      .catch(error => {
        console.log(error.response.data.message);
        const { message } = error;
        res.send({ message });
      });
  } catch (error) {
    const { message } = error;
    res.send({ message });
  }
};

const getWeatherByCity = async (req, res) => {
  try {
    const { city } = req.body;
    if (!city) {
      res.send({ status: false, message: "invalid city" });
    }

    const response = await axios.get(
      `https://api.weatherapi.com/v1/current.json?key=${process.env.API_KEY}&q=${city}`
    );

    res.send({
      status: true,
      data: { ...response.data.location, ...response.data.current }
    });
  } catch (error) {
    const { message } = error;
    res.send({ message });
  }
};

const getForcastByDays = async (req, res) => {
  try {
    const { city, days } = req.body;

    if (!city) {
      res.send({ status: false, message: "city required" });
    }

    if (!days) {
      res.send({ status: false, message: "days required" });
    }

    const response = await axios.get(
      `https://api.weatherapi.com/v1/forecast.json?key=${process.env.API_KEY}&q=${city}&days=${days}&aqi=no&alerts=no`
    );

    res.send({
      status: true,
      data: {
        ...response.data.location,
        ...response.data.current,
        ...response.data.forecast
      }
    });
  } catch (error) {
    const { message } = error;
    res.send({ message });
  }
};

const getForcastByDate = async (req, res) => {
  try {
    const { city, date } = req.body;

    if (!city) {
      res.send({ status: false, message: "city required" });
    }

    if (!date) {
      res.send({ status: false, message: "date required" });
    }

    const response = await axios.get(
      `https://api.weatherapi.com/v1/future.json?key=${process.env.API_KEY}&q=${city}&dt=${date}`
    );

    res.send({
      status: true,
      data: {
        ...response.data.location,
        ...response.data.current,
        ...response.data.forecast
      }
    });
  } catch (error) {
    const { message } = error;
    res.send({ message });
  }
};

module.exports = {
  getWeatherByCities,
  getWeatherByCity,
  getForcastByDays,
  getForcastByDate
};
