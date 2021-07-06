const CategoryRouter = require('express').Router()

const { createCategory } = require('../controllers/category.controller')

CategoryRouter.post('/', createCategory)

module.exports = CategoryRouter 