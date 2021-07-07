const mongoose = require('mongoose')
const itemSchema = require('./item.model')

const ShoppingSchema = new mongoose.Schema({
  products: [itemSchema]
})

module.exports = mongoose.model('shoppinglists', ShoppingSchema)