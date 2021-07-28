const {req , res } = require('express');

const GroupModel = require("../models/group.model");

const getShoppingList = async (req, res ) => {
  if(!res.locals.user.group || res.locals.user.group ==='') return res.status(200).json({ message: "no tiene" });
  try{
    const getList = await GroupModel.findOne({_id:res.locals.user.group}).populate('shoppingList.productId')
    res.status(200).json(getList.shoppingList)
  }catch(error) {
    console.log('Error', error)
    res.status(400).json({ message: "Error, cannot find Shopping List" });
  }
}

const addProductToList = async (req, res) => {
  try {
    const group = await GroupModel.findOne({_id:res.locals.user.group}).populate('shoppingList.productId')
    group.shoppingList.push(req.body)
    await group.save()
    const getList = await GroupModel.findOne({_id:res.locals.user.group}).populate('shoppingList.productId')
    res.status(200).json(getList.shoppingList)  
  } catch (error) {
    res.status(400).json({ message: "Error, cannot add product to Shopping List" })
  }
};
const editProductNote = async (req, res) =>{
  try {
    const group = await GroupModel.findOne({_id:res.locals.user.group}).populate('shoppingList.productId')
    const product = group.shoppingList.id(req.params.idProduct)
    console.log(req.body.notes)
    product.notes = req.body.notes
    await group.save()
    res.status(200).json({msg:'bien'})
  } catch (error) {
    res.status(400).json({ message: "Error, cannot find Shopping List" });
  }
}

const deleteProductFromList = async (req, res) => {
  try{
    const getList = await GroupModel.findOne({_id:res.locals.user.group}).populate('shoppingList.productId')

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
  deleteProductFromList,
  editProductNote
}

