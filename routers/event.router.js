const EventRouter = require('express').Router()

const {
  createEvent,
  updateEvent,
  deleteEvent,
  getEvents
} = require('../controllers/event.controller')

const {
  validateJwt
} = require('../middlewares/validateJWT')

EventRouter
  .get('/', validateJwt, getEvents)
  .post('/', validateJwt, createEvent)
  .put('/:eventId', validateJwt, updateEvent)
  .delete('/:eventId', validateJwt, deleteEvent)

module.exports = EventRouter
