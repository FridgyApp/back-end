const mongoose = require('mongoose')

const ShoppingItemSchema = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'product',
    required: true
  },
  notes: {
    type: String,
    default: ''
  }
})

const StickyNoteSchema = new mongoose.Schema({
  name : String, 
  description: String,
})

const groupSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  members: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'users'
  }],
  shoppingList: [ShoppingItemSchema],
  stickyNotes: [StickyNoteSchema]
})

module.exports = mongoose.model('groups', groupSchema)