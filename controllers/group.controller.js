const { req, res } = require("express");

const GroupModel = require("../models/group.model");

const getGroup = async (req, res ) => {
  try{
    const getGroup = await GroupModel.find()
    res.status(200).json(getGroup)
  }catch(error) {
    console.log('Error', error)
    res.status(400).json({ message: "Error, cannot find Group" });
  }
}

const createGroup = async (req, res) => {
  req.body.members.push(res.locals.user._id)
  console.log(req.body)
  try {
    const createGroup = await GroupModel.create(req.body);
    await createGroup.save();
    res.status(200).json(createGroup);
  } catch (error) {
    console.log("Error", error);
    res.status(400).json({ message: "Error, cannot create Group" });
  }
};

module.exports = {
  createGroup,
  getGroup
};
