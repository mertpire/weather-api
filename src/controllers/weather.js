const weatherModel = require('../models/weather.js');

const getWeather = async (req, res, next) => {
  try {
    const response = await weatherModel(req.params.city)
    res.send(response)
  } catch (error) {
    res.send(error)
  }
};

module.exports = { getWeather };