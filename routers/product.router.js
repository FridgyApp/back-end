const routerProduct = require('express').Router()

const { createProduct } = require('../controllers/product.controller')

routerProduct .post('/',  createProduct)

module.exports = routerProduct 