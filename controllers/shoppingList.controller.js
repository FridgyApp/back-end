const { request, response } = require("express");

const ShoppingModel = require("../models/shoppingList.model");
const mongoose = require("mongoose");

const createShopping = async (req, res = response) => {
  try {
    const createList = await ShoppingModel.create();
    await createList.save();
    res.json(createList);
  } catch (error) {
    console.log("Error", error);
  }
};

const getShoppingList = async (req, res) => {
  try {
    const getAllShoppingList = await ShoppingModel.find();
    console.log(getAllShoppingList)
    res.json(getAllShoppingList);
  } catch (error) {
    console.log("Error", error);
  }
};

const addProductToList = async (req, res) => {
  const { productId } = req.body;
  req.body.product = mongoose.Types.ObjectId(productId);
  try {
    const shoppingList = await ShoppingModel.findById(
      "60e57f6a7435c4c3713e146f"
    );
    shoppingList.products.push(req.body);
    await shoppingList.save();
    res.status(200).json(shoppingList);
  } catch (error) {
    console.log("Error", error);
    res.status(400).json({ message: "Error, cannot find" });
  }
};

const changeStatus = async (req, res) => {
  try {
    const list = await ShoppingModel.findById("60e57f6a7435c4c3713e146f");
    list.products.forEach((product) => {
      if (product._id == req.body.id) {
        product.bought = !product.bought;
        product.notes = "";
      }
    });
    list.save();
    res.status(200).json(list);
  } catch (error) {
    console.log(error);
  }
};
module.exports = {
  createShopping,
  getShoppingList,
  addProductToList,
  changeStatus,
};
