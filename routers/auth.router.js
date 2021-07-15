const AuthRouter = require('express').Router()
const { check } = require('express-validator')

const { isEmail } = require('../database/validators-db')
const validateBody = require('../middlewares/validateBody')

const { signup, login } = require('../controllers/auth.controller')

AuthRouter.post('/signup',
  [
    check('name', 'El nombre es obligatorio').not().isEmpty(),
    check('email', 'Tiene que ser un email valido').isEmail(),
    check('email').custom(isEmail),
    check('password').not().isEmpty().isLength({ min: 6 }),
    validateBody,
  ]
  , signup)

AuthRouter.post('/login',
  [
    check('email', 'Usuario o contraseña son invalido').isEmail(),
    check('password', 'Usuario o contraseña son invalido').isLength({ min: 6 }),
    validateBody
  ]
  , login)

module.exports = AuthRouter
