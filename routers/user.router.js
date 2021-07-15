const { getUser } = require('../controllers/user.controller')
const { validateJwt } = require('../middlewares/validateJWT')

const userRouter = require('express').Router()

userRouter.get('/', validateJwt ,getUser)

module.exports = userRouter
