const routerProduct = require('express').Router()

const { 
  createProduct,
  getProducts
} = require('../controllers/product.controller')

const {
  validateJwt
} = require('../middlewares/validateJWT')

routerProduct 
.get('/:groupId', validateJwt, getProducts)
.post('/', validateJwt, createProduct)


module.exports = routerProduct 