const router = require('express').Router()

const AuthRouter = require('./auth.router')
const CategoryRouter = require('./category.router')
const GroupRouter = require('./group.router')
const routerProduct = require('./product.router')
const ShoppingListRouter = require('./shoppingList.router')
const userRouter = require('./user.router')
const StickyNotesRouter = require('./stickyNote.router')

router
  .use('/auth', AuthRouter)
  .use('/category', CategoryRouter)
  .use('/user', userRouter)
  .use('/group', GroupRouter)
  .use('/products', routerProduct)
  .use('/shoppinglist', ShoppingListRouter)
  .use('/stickynotes', StickyNotesRouter)

module.exports = router
