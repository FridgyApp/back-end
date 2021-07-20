const {req , res } = require('express');

const GroupModel = require("../models/group.model");

const getShoppingList = async (req, res ) => {
  try{
    const getList = await GroupModel.findOne().populate('shoppingList.productId')
    res.status(200).json(getList.shoppingList)
  }catch(error) {
    console.log('Error', error)
    res.status(400).json({ message: "Error, cannot find Shopping List" });
  }
}

const addProductToList = async (req, res) => {
  try {
    const group = await GroupModel.findOne().populate('shoppingList.productId')
    group.shoppingList.push(req.body)
    await group.save()
    res.status(200).json(group.shoppingList)   
  } catch (error) {
    res.status(400).json({ message: "Error, cannot add product to Shopping List" })
  }
};

const deleteProductFromList = async (req, res) => {
  try{
    const getList = await GroupModel.findOne().populate('shoppingList.productId')

    getList.shoppingList = getList.shoppingList.filter(product => product.productId._id != req.params.productId)

    await getList.save();
    res.status(200).json(getList.shoppingList)
  }catch(error) {
    console.log('Error', error)
    res.status(400).json({ message: "Error, cannot find Shopping List" });
  }
}

module.exports = {
  getShoppingList,
  addProductToList,
  deleteProductFromList
}

