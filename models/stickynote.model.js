const mongoose = require('mongoose')

const StickyNoteSchema = new mongoose.Schema({
  name : String, 
  description: String,
  assigned: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'creator', 
  },
})

module.exports = mongoose.model ('stickyNotes', StickyNoteSchema)