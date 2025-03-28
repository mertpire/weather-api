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
4. Start the server:
   ```sh
   npm start
   ```

#### Example Request

```sh
curl http://localhost:3000/weather/mersin
```

