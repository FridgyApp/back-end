require('dotenv').config()
const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const mongoose = require('mongoose')

const router = require('./routers/index')
const api = express()

api
  .use(cors())
  .use(morgan('dev'))
  .use(express.json())
  .use('/api',router)
  .listen(process.env.PORT , () => {
  console.log('Encendido')
  mongoose
  .connect(process.env.MONGO_URL_LOCAL,
    {
      dbName: process.env.MONGO_DB,
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
      useFindAndModify: false
    }, err => {
      if (err) { throw new Error(err) }
      console.info('Connected to Mongo Database \n')
      console.info('>'.repeat(40))
      console.info('   Reboot Server Live')
      console.info(`   PORT: http://localhost:${process.env.PORT}`)
      console.info('>'.repeat(40) + '\n')
    })
})