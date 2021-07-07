const { ObjectId } = require('bson')
const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
  name: String,
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'category'
  },
  groupId: String
})

module.exports = mongoose.model('product', ProductSchema)

