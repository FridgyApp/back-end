const {request , response } = require('express')

const ProductModel = require ('../models/product.model')

const createProduct = async(req, res = response) => {
  try {
    const createProductList = await ProductModel.create(req.body)
  createProductList.save() 
  res.json(createProductList)
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