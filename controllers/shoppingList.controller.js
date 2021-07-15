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
    group.shoppingList.push(req.body);
    await group.save();
    await getShoppingList(req, res)
  } catch (error) {
    console.log("Error", error);
    res.status(400).json({ message: "Error, cannot add product to Shopping List" });
  }
};
module.exports = {
  getShoppingList,
  addProductToList
}

