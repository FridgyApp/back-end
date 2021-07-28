const ShoppingListRouter = require('express').Router()

const {
  getShoppingList,
  addProductToList,
  deleteProductFromList,
  editProductNote
} = require('../controllers/shoppingList.controller')

const {
  validateJwt
} = require('../middlewares/validateJWT')

ShoppingListRouter
  .get('/', validateJwt, getShoppingList)
  .post('/', validateJwt, addProductToList)
  .put('/:idProduct', validateJwt, editProductNote)
  .delete('/:productId', validateJwt, deleteProductFromList)

module.exports = ShoppingListRouter
