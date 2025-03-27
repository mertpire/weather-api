# Weather API with Caching

This project is a simple weather API that fetches and returns weather data from a third-party API (e.g., Visual Crossing). It implements an in-memory cache using Redis to store responses and improve performance.

## Features

- Fetches real-time weather data from a third-party API.
- Uses Redis for caching to reduce API requests.
- Uses environment variables for API keys and configuration.
- Implements rate limiting to prevent abuse.

## Prerequisites

- Node.js installed (version 16+ recommended)
- Redis installed and running
- A third-party weather API key (e.g., from Visual Crossing)

## Installation

1. Clone this repository:
   ```sh
   git clone https://github.com/mertpire/weather-api.git
   cd weather-api
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Create a `.env` file and add your environment variables:
   ```sh
   WEATHER_API_KEY=your_weather_api_key
   REDIS_URL=redis://localhost:6379
   APP_PORT=3000
   ```
4. Start the server:
   ```sh
   npm start
   ```

#### Example Request

```sh
curl http://localhost:3000/weather/London
```

## Caching Strategy

- The city code is used as the Redis key.
- Weather data is cached for 12 hours.
- If cached data exists, the API serves it instead of making an external request.

## Rate Limiting

- Implemented using `express-rate-limit` to limit the number of requests per minute.

