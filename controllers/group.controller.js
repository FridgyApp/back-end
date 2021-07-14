const { req, res } = require("express");

const GroupModel = require("../models/group.model");

const getGroup = async (req, res ) => {
  try{
    const getGroup = await GroupModel.find()
    res.json(getGroup)
  }catch(error) {
    console.log('Error', error)
  }
}

const createGroup = async (req, res) => {
  try {
    const createGroup = await GroupModel.create(req.body);
    await createGroup.save();
    res.json(createGroup);
  } catch (error) {
    console.log("Error", error);
  }
};

module.exports = {
  createGroup,
  getGroup
};
