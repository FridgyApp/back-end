const { request, response } = require("express");
const mongoose = require("mongoose");

const ProductModel = require("../models/product.model");

const getProducts = async (req, res) => {
  try {
    // if (req.query.name) {
    //   const products = await ProductModel.find()
    //   const filteredName = products.filter(product => {
    //     return product.name.toLowerCase().includes(`${req.query.name.toLowerCase()}`)

    //   });
    //   res.status(200).json(filteredName)

    // }
    
    
      const getAllProducts = await ProductModel.find({ $or: [{ groupId: { $eq: '' } }, { groupId: { $eq: res.locals.user.group } }] });
      res.status(200).json(getAllProducts);
    

  } catch (error) {
    res.status(400).json({ message: "Error, cannot find Products" });
  }
};

const createProduct = async (req, res = response) => {
  try {
    req.body.groupId = res.locals.user.group
    const createOwnProduct = await ProductModel.create(req.body);

    res.status(200).json(createOwnProduct)
  } catch (error) {
    console.log("Error", error);
    res.status(400).json({ message: "Error, cannot create Product" });
  }
};



module.exports = {
  createProduct,
  getProducts,
};
