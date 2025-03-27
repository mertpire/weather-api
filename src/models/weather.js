const { redisConnect } = require('../loaders/redisDb.js');

let redisClient;

(async () => {
  try {
    redisClient = await redisConnect();
  } catch (error) {
    console.error('Redis connection error:', error);
  }
})();

const getWeatherFromAPI = async (city) => {
  try {
    const response = await fetch(`${process.env.WEATHER_BASE_URL}${city}?key=${process.env.WEATHER_API_KEY}`);
    return await response.json();
  } catch (error) {
    console.error('Error fetching weather data:', error);
  }
};

const getCachedWeather = async (city) => {
  try {
    return await redisClient.get(city);
  } catch (error) {
    console.error('Error retrieving cache:', error);
    return null;
  }
};

const saveWeatherToCache = async (city, data) => {
  try {
    await redisClient.set(city, JSON.stringify(data), { EX: 300 });
  } catch (error) {
    console.error('Error saving data to cache:', error);
  }
};

const weatherModel = async (city) => {
  try {
    const cachedData = await getCachedWeather(city);
    if (cachedData) {
      console.log(`${city} data from cache`);
      return JSON.parse(cachedData);
    }

    const apiData = await getWeatherFromAPI(city);
    await saveWeatherToCache(city, apiData);
    console.log(`${city} data from api`);
    return apiData;
  } catch (error) {
    console.error('Error in weatherModel:', error);
  }
};

module.exports = weatherModel;
