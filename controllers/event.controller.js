const { req, res } = require('express')

const GroupModel = require('../models/group.model')
const EventModel = require('../models/event.model')

// create event

const createEvent = async (req, res) => {
  try {
    const group = await GroupModel.findOne(res.locals.user.group)
    group.events.push(req.body)
    await group.save()
    res.status(200).json(group.events.pop())
  } catch (error) {
    res.status(400).json({ message: 'Error, cannot create Event' })
  }
}

module.exports = {
  createEvent,

};
