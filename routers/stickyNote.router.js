const StickyNotesRouter = require ('express').Router()

const {
  getStickyNotes,
  createStickyNote,
  updateStickyNote,
  deleteStickyNote
} = require('../controllers/stickyNote.controller')

StickyNotesRouter
  .get('/', getStickyNotes)
  .post('/', createStickyNote)
  .put('/', updateStickyNote)
  .delete('/', deleteStickyNote)


  module.exports = StickyNotesRouter