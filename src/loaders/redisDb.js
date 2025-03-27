const redis = require('redis');

const redisConnect = async () => {
  const client = redis.createClient({
    username: process.env.REDIS_USERNAME || 'default',
    password: process.env.REDIS_PASSWORD || '',
    socket: {
      host: process.env.REDIS_HOST || 'localhost',
      port: process.env.REDIS_PORT || 6379
    }
  });
  try {
    await client.connect();

    console.log('Connected to Redis');
  } catch (error) {
    console.error(error);

  }
  return client;

}

module.exports = { redisConnect };