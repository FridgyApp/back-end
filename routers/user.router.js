const { getUser } = require('../controllers/user.controller')

const userRouter = require('express').Router()

userRouter.get('/', getUser)

module.exports = userRouter
