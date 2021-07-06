const router = require('express').Router()

const routerProduct = require('./product.router')
const routerShopping = require('./shoppingList.router')
const CategoryRouter = require('./category.router')

router
  .use('/home',routerShopping)
  .use('/products', routerProduct)
  .use('/category', CategoryRouter)

module.exports = router
