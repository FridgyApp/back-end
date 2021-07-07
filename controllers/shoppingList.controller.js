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

const getShoppingList = async (req, res) => {
  try{
    const getAllShoppingList = await ShoppingModel.find()
    res.json(getAllShoppingList)
  } catch (error) {
    console.log('Error', error)
  }
}

const addProductToList = async (req, res ) => {
  try{
    const shoppingList = await ShoppingModel.findById('60e57f6a7435c4c3713e146f')
    shoppingList.products.push(req.body)
    await shoppingList.save()
    res.status(200).json(shoppingList)
  }catch (error) {
    console.log('Error', error)
    res.status(400).json({message: 'Error, cannot find'})
  }
}

module.exports = {
  createShopping,
  getShoppingList,
  addProductToList
}