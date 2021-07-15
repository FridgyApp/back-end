const { request, response } = require("express");
const mongoose = require("mongoose");

const ProductModel = require("../models/product.model");
const CategoryModel = require("../models/category.model");

const getProducts = async (req, res) => {
  try {
    if (req.query.name) {
      const products = await ProductModel.find()
      const filteredName = products.filter(product   => {
        return product.name.toLowerCase().includes(`${req.query.name.toLowerCase()}`)

      });
      res.status(200).json(filteredName)
      
    } else {
      const getAllProducts = await ProductModel.find({$or:[{groupId:{$eq:''}}, {groupId:{$eq:req.body.groupId}}]});
      res.status(200).json(getAllProducts);
    }
  } catch (error) {
    console.log("Error", error);
    res.status(400).json({ message: "Error, cannot find Products" });
  }
};

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
    

    //falta asignarle su groupId

    res.status(200).json(req.body)
    
  } catch (error) {
    console.log("Error", error);
    res.status(400).json({ message: "Error, cannot create Product" });
  }
};



module.exports = {
  createProduct,
  getProducts,
};
