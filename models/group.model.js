const mongoose = require('mongoose')

const EventSchema = require('./event.model').schema

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
  name: String,
  description: String,
})

const GroupSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  members: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users'
  }],
  shoppingList: [ShoppingItemSchema],
  stickyNotes: [StickyNoteSchema],
  events: [EventSchema]

})

module.exports = mongoose.model('groups', GroupSchema)