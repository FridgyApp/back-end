const {request , response } = require('express')

const CategoryModel = require ('../models/category.model')

const getAllCategories = async (req, res ) => {
  try{
    const getCategoriesList = await CategoryModel.find()
    res.json(getCategoriesList)
  }catch(error) {
    console.log('Error', error)
  }
}
module.exports = {getAllCategories}