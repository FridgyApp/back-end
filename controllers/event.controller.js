const { req, res } = require('express')

const GroupModel = require('../models/group.model')
const EventModel = require('../models/event.model')

// create event

const getEvents = async (req, res) => {
  if (!res.locals.user.group) return res.status(200).json({message:'hola mundo' })
  try {
    const group = await GroupModel.findOne(res.locals.user.group)
    res.status(200).json(group.events)
  } catch (error) {
    res.status(400).json({ message: "Error, cannot find Events" });
  }
}

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

const updateEvent = async (req, res) => {
  try {
    const group = await GroupModel.findOne(res.locals.user.group)

    const event = group.events.id(req.params.eventId)

    event.name = req.body.name || event.name
    event.description = req.body.description || event.description
    event.start = req.body.start || event.start
    event.end = req.body.end || event.end
    event.allDay = req.body.allDay || event.allDay

    await group.save()
    res.status(200).json(group.events.id(req.params.eventId))
  } catch (error) {
    res.status(400).json({ message: 'Error, cannot update' })
  }
}

const deleteEvent = async (req, res) => {
  try {
    const group = await GroupModel.findOne(res.locals.user.group)
    group.events.remove(req.params.eventId)

    await group.save()
    res.status(200).json({ message: 'Event deleted' })
  } catch (error) {
    res.status(400).json({ message: 'Error, cannot delete' })
  }
}

module.exports = {
  createEvent,
  updateEvent,
  deleteEvent,
  getEvents
}
