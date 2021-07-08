const { request, response } = require("express");
const mongoose = require("mongoose");

const ProductModel = require("../models/product.model");
const CategoryModel = require("../models/category.model");
const ShoppingListController = require("../controllers/shoppingList.controller");

const createProduct = async (req, res = response) => {
  req.body.category = mongoose.Types.ObjectId("60e587407435c4c3713e1483");
  try {
    const createOwnProduct = await ProductModel.create(req.body);
    createOwnProduct.save();
    const findCategoryId = await CategoryModel.findById(
      "60e587407435c4c3713e1483"
    );
    findCategoryId.products.push(createOwnProduct);
    await findCategoryId.save();

    req.body.productId = createOwnProduct._id;
    req.body.notes = "";
    req.body.bought = false;

    ShoppingListController.addProductToList(req, res);
  } catch (error) {
    console.log("Error", error);
  }
};

const getProducts = async (req, res) => {
  try {
    if (req.query.name) {
      const products = await ProductModel.find()
      const filteredName = products.filter(product   => {
        return product.name.toLowerCase().includes(`${req.query.name.toLowerCase()}`)

      });
      res.json(filteredName)
      
    } else {
      const getAllProducts = await ProductModel.find();
      res.json(getAllProducts);
    }
  } catch (error) {
    console.log("Error", error);
  }
};

module.exports = {
  createProduct,
  getProducts,
};
