const EventRouter = require('express').Router()

const {
  createEvent
} = require('../controllers/event.controller')

const {
  validateJwt
} = require('../middlewares/validateJWT')

EventRouter
  // .get('/', validateJwt, getStickyNotes)
  .post('/', validateJwt, createEvent)
  // .put('/:noteId', validateJwt, updateStickyNote)
  // .delete('/:noteId', validateJwt, deleteStickyNote)

module.exports = EventRouter
