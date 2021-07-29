

const GroupModel = require('../models/group.model')
const AuthModel = require('../models/auth.model')
const ProductModel = require("../models/product.model")

// GET GROUP - PENDING REVIEW - KEEP IF USER CAN HAVE MULTIPLE GROUPS
const getGroup = async (req, res) => {
  if (!res.locals.user.group || res.locals.user.group === '') return res.status(200).json({ message: 'no tiene' })
  try {
    const getGroup = await GroupModel.findById(res.locals.user.group).populate('members').populate('shoppingList.productId')
    res.status(200).json(getGroup)
  } catch (error) {
    res.status(400).json({ message: 'Error, cannot find Group' })
  }
}

const createGroup = async (req, res) => {
  try {
    req.body.members.push(res.locals.user._id)
    const group = await GroupModel.create(req.body)
    await group.save()
    res.locals.user.group = group.id
    res.locals.user.save()
    res.status(200).json(res.locals.user)
  } catch (error) {
    res.status(400).json({ message: 'Error, cannot create Group' })
  }
}

const addUserGroup = async (req, res) => {
  try {
    const user = await AuthModel.findOne({ email: req.body.email })
    if (user.group && user.group !== '') {
      return res.status(400).json({ message: 'Error, user is already in a group' })
    }
    const group = await GroupModel.findOne({ _id: res.locals.user.group })
    group.members.push(user._id)
    user.group = res.locals.user.group
    await user.save()
    await group.save()
    res.status(200).json(user)
  } catch (error) {
    res.status(400).json({ message: 'Error, cannot add member to group' })
  }
}

module.exports = {
  createGroup,
  getGroup,
  addUserGroup
}
