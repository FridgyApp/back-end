const CategoryRouter = require('express').Router()

const { 
  getAllCategories
 } = require('../controllers/category.controller')

CategoryRouter.get('/', getAllCategories)

module.exports = CategoryRouter 