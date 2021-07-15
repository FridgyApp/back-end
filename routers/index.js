const router = require('express').Router()

const routerProduct = require('./product.router')
const GroupRouter = require('./group.router')
const ShoppingListRouter = require('./shoppingList.router')
const CategoryRouter = require('./category.router')
const authRouter = require('./auth.router')
const userRouter = require('./user.router')

router
  .use('/products', routerProduct)
  .use('/group',GroupRouter)
  .use('/shoppingList', ShoppingListRouter)
  .use('/category', CategoryRouter)
  .use('/auth', authRouter)
  .use('/user', userRouter)

module.exports = router
