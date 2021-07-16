const ShoppingListRouter = require('express').Router()

const {
  getShoppingList,
  addProductToList,
  deleteProductFromList
} = require('../controllers/shoppingList.controller')

ShoppingListRouter
  .get('/', getShoppingList)
  .post('/', addProductToList)
  .delete('/:productId', deleteProductFromList)

  module.exports = ShoppingListRouter