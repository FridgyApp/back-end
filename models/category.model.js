const mongoose = require('mongoose')

const CategorySchema = new mongoose.Schema({
  name : String,
  products: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'product'
  }]
})

module.exports = mongoose.model('category', CategorySchema)