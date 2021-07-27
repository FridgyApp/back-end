const StickyNotesRouter = require ('express').Router()

const {
  getStickyNotes,
  createStickyNote,
  updateStickyNote,
  deleteStickyNote
} = require('../controllers/stickyNote.controller')

const {
  validateJwt
} = require('../middlewares/validateJWT')

StickyNotesRouter
  .get('/', validateJwt, getStickyNotes)
  .post('/', validateJwt, createStickyNote)
  .put('/:noteId', validateJwt, updateStickyNote)
  .delete('/:noteId', validateJwt, deleteStickyNote)


  module.exports = StickyNotesRouter