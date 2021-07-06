const {request , response } = require('express')

const ShoppingModel = require ('../models/shoppingList.model')

const createShopping = async(req, res = response ) => {
  try {
    const createList = await ShoppingModel.create()
  createList.save() 
  res.json(createList)
  } catch (error) {
  console.log('Error', error)
  }
}

module.exports = {
  createShopping
}