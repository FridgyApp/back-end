const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
  name: String,
  category : {
    type: String,
    default : 'Own Products'
  },
  groupId : {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'groups'
  }
})

module.exports = mongoose.model('product', ProductSchema)
