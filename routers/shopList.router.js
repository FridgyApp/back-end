const ShopListRouter = require('express').Router()

const {
  getShoppingList,
  addProductToList
} = require('../controllers/shopList.controller')

ShopListRouter
  .get('/', getShoppingList)
  .post('/', addProductToList)

  module.exports = ShopListRouter