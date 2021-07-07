const {request , response } = require('express')
const mongoose = require('mongoose')

const ProductModel = require ('../models/product.model')
const CategoryModel = require ('../models/category.model')

const createProduct = async(req, res = response) => { 
  req.body.category = mongoose.Types.ObjectId('60e587407435c4c3713e1483')
  try {
    const createOwnProduct = await ProductModel.create(req.body)
    createOwnProduct.save()

    const findCategoryId = await CategoryModel.findById('60e587407435c4c3713e1483')
    findCategoryId.products.push(createOwnProduct)
    findCategoryId.save()
     
  res.json(createOwnProduct)
  } catch (error) {
  console.log('Error', error)
  }
}

const getProducts  = async (req, res) =>{
  try{
    const getAllProducts = await ProductModel.find()
    res.json(getAllProducts)
  } catch (error){
    console.log('Error', error)
  }
}

module.exports = {
  createProduct,
  getProducts
}