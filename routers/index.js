const router = require('express').Router()

const AuthRouter = require('./auth.router')
const GroupRouter = require('./group.router')
const ProductRouter = require('./product.router')
const ShoppingListRouter = require('./shoppingList.router')
const UserRouter = require('./user.router')
const StickyNotesRouter = require('./stickyNote.router')
const EventRouter = require('./event.router')

router
  .use('/auth', AuthRouter)
  .use('/user', UserRouter)
  .use('/group', GroupRouter)
  .use('/products', ProductRouter)
  .use('/shoppinglist', ShoppingListRouter)
  .use('/stickynotes', StickyNotesRouter)
  .use('/events', EventRouter)

module.exports = router
