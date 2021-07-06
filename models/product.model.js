const { ObjectId } = require('bson')
const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
  name: String,
  category: String,
  groupId: String
})

module.exports = mongoose.model('product', ProductSchema)

