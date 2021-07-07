const routerProduct = require('express').Router()

const { 
  createProduct,
  getProducts 
} = require('../controllers/product.controller')

routerProduct 
  .post('/',  createProduct)
  .get('/', getProducts)


module.exports = routerProduct 