const {request , response } = require('express')

const CategoryModel = require ('../models/category.model')

const createCategory = async(req , res = response) => {
  try {
    const createCategoryList = await CategoryModel.create(req.body)
  createCategoryList.save() 
  res.json(createCategoryList)
  } 
  catch (error){
    console.log('Error', error)
  }
}

module.exports = {createCategory}