const mongoose = require('mongoose')

const EventSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: String,
  start: {
    type: Date,
    required: true
  },
  end: {
    type: Date,
    required: true
  },
  timed: {
    type: Boolean,
    default: false
  },
  color: {
    type: String, 
    required: true,
    default: 'blue'
  }
})

const eventModel = mongoose.model('events', EventSchema)
module.exports = eventModel
