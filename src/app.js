const express = require('express')

const config = require('./config')
config()

const middlewares = require('./middlewares')
const routers = require('./routers')


const app = express()

app.use(middlewares)
app.use('/api', routers)

app.listen(process.env.APP_PORT, () => {
  console.log(`Server is running on port ${process.env.APP_PORT}`)
})