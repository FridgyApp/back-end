const ShoppingListRouter = require('express').Router()

const {
  getShoppingList,
  addProductToList,
  deleteProductFromList
} = require('../controllers/shoppingList.controller')

const {
  validateJwt
} = require('../middlewares/validateJWT')

ShoppingListRouter
  .get('/', validateJwt, getShoppingList)
  .post('/', validateJwt, addProductToList)
  .delete('/:productId', validateJwt, deleteProductFromList)

module.exports = ShoppingListRouter
