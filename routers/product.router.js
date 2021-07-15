const routerProduct = require('express').Router()

const { 
  createProduct,
  getProducts
} = require('../controllers/product.controller')

routerProduct 
.get('/:groupId', getProducts)
.post('/', createProduct)


module.exports = routerProduct 