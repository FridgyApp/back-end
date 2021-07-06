const mongoose = require('mongoose')

const CategorySchema = new mongoose.Schema({
  name : String,
  products: Array
})

module.exports = mongoose.model('category', CategorySchema)