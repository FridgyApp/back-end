const { req, res } = require("express");

const GroupModel = require("../models/group.model");

// GET GROUP - PENDING REVIEW - KEEP IF USER CAN HAVE MULTIPLE GROUPS
const getGroup = async (req, res) => {
  try{
    const getGroup = await GroupModel.findById(res.locals.user.group)
    res.status(200).json(getGroup)
  } catch(error) {
    console.log('Error', error)
    res.status(400).json({ message: "Error, cannot find Group" });
  }
}

const createGroup = async (req, res) => {
  try {
    req.body.members.push(res.locals.user._id)
    const group = await GroupModel.create(req.body);
    await group.save();
    res.locals.user.group = group.id
    res.locals.user.save()
    res.status(200).json(group);
  } catch (error) {
    console.log("Error", error);
    res.status(400).json({ message: "Error, cannot create Group" });
  }
};

module.exports = {
  createGroup,
  getGroup
};
