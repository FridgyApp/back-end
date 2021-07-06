const mongoose = require ('mongoose')

const itemSchema = new mongoose.Schema({
  quantity : Number,
  bought: Boolean
})

module.exports = itemSchema