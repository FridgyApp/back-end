const mongoose = require ('mongoose')

const itemSchema = new mongoose.Schema({
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'product'
  },
  notes : String,
  bought: Boolean
})

module.exports = itemSchema