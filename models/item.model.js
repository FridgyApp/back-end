const mongoose = require ('mongoose')

const itemSchema = new mongoose.Schema({
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'products'
  },
  quantity : Number,
  bought: Boolean
})

module.exports = itemSchema