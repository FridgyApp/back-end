const { req, res } = require('express')

const GroupModel = require('../models/group.model')
const AuthModel = require('../models/auth.model')

const { auth } = require('google-auth-library')

// GET GROUP - PENDING REVIEW - KEEP IF USER CAN HAVE MULTIPLE GROUPS
const getGroup = async (req, res) => {
  if(!res.locals.user.group || res.locals.user.group ==='') return res.status(200).json({ message: "no tiene" });
  try {
    const getGroup = await GroupModel.findById(res.locals.user.group)
    res.status(200).json(getGroup)
  } catch (error) {
    console.log('Error', error)
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
    res.status(200).json(group)
  } catch (error) {
    console.log('Error', error)
    res.status(400).json({ message: 'Error, cannot create Group' })
  }
}

const addUserGroup = async (req, res) => {
  console.log(req.body)
  try {
    const user = await AuthModel.findOne({ email: req.body.email })
    console.log(user)
    if (user.group && user.group !== '') {
      return res.status(400).json({ message: 'Error, user is already in a group' })
    }
    const group = await GroupModel.findOne({ _id: res.locals.user.group })
    console.log('tercero')
    group.members.push(user._id)
    user.group = res.locals.user.group
    await user.save()
    await group.save()
    res.status(200).json(group)
  } catch (error) {
    res.status(400).json({ message: 'Error, cannot add member to group' })
  }
}

module.exports = {
  createGroup,
  getGroup,
  addUserGroup
}
