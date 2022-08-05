const axios = require("axios");

const getWeatherByCities = async (req, res) => {
  try {
    const { cities } = req.body;

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

const getAllUrls = (cities, res) => {
  if (!cities) {
    res.send({ status: false, message: "invalid city" });
  }
  if (cities.length === 0) {
    res.send({ status: false, message: "city required" });
  }
  let requests = [];
  cities.forEach(city => {
    if (!city) {
      res.send({ status: false, message: "invalid city" });
    }
    let URL = `https://api.weatherapi.com/v1/current.json?key=${process.env.API_KEY}&q=${city}`;
    let request = axios.get(URL);
    requests.push(request);
  });
  return requests;
};

module.exports = { getWeatherByCities, getWeatherByCity };
