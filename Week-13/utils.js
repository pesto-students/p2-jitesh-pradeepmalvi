const axios = require("axios");

const getAllUrls = (cities, res) => {
  let requests = [];
  cities.forEach(city => {
    let URL = `https://api.weatherapi.com/v1/current.json?key=${process.env.API_KEY}&q=${city}`;
    let request = axios.get(URL);
    requests.push(request);
  });
  return requests;
};

module.exports = { getAllUrls };
