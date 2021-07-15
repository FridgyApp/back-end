const mongoose = require('mongoose')

const shoppingItemSchema = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'product',
    required : true
  },
  notes: String
})

const groupSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  members: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user'
    }
  ],
  shoppingList: [shoppingItemSchema]
})

module.exports = mongoose.model('groups', groupSchema)