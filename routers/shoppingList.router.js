const ShoppingListRouter = require('express').Router()

const {
  getShoppingList,
  addProductToList
} = require('../controllers/shoppingList.controller')

ShoppingListRouter
  .get('/', getShoppingList)
  .post('/', addProductToList)

  module.exports = ShoppingListRouter