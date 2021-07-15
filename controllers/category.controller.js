const {request , response } = require('express')

const CategoryModel = require ('../models/category.model')

const getAllCategories = async (req, res ) => {
  try{
    const getCategoriesList = await CategoryModel.find()
    res.status(200).json(getCategoriesList)
  }catch(error) {
    console.log('Error', error)
    res.status(400).json({ message: "Error, cannot find Categories" });
  }
}
module.exports = {getAllCategories}