const routerShopping = require('express').Router()

const { createShopping } = require('../controllers/shoppingList.controller')

routerShopping .post('/',  createShopping)

module.exports = routerShopping 