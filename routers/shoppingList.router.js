const routerShopping = require('express').Router()

const { 
  createShopping,
  getShoppingList,
  addProductToList,
  changeStatus
} = require('../controllers/shoppingList.controller')


routerShopping 
  .get('/', getShoppingList)
  .post('/createShoppingList', createShopping)
  .post('/addProduct', addProductToList)
  .put('/changeStatus', changeStatus )

module.exports = routerShopping 