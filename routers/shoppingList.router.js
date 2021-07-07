const routerShopping = require('express').Router()

const { 
  createShopping,
  getShoppingList,
  addProductToList
} = require('../controllers/shoppingList.controller')


routerShopping 
  .get('/', getShoppingList)
  .post('/createShoppingList', createShopping)
  .post('/addProduct', addProductToList)
module.exports = routerShopping 