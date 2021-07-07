const routerShopping = require('express').Router()

const { 
  createShopping,
  getShoppingList
} = require('../controllers/shoppingList.controller')

routerShopping 
  .post('/',  createShopping)
  .get('/', getShoppingList)
module.exports = routerShopping 