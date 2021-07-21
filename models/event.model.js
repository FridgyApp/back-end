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
  allDay: Boolean,
  default: false
})

const eventModel = mongoose.model('events', EventSchema)
module.exports = eventModel
