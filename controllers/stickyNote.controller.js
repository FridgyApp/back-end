const {req , res} = require('express');
const GroupModel = require('../models/group.model')

const getStickyNotes = async (req, res ) => {
  if(!res.locals.user.group || res.locals.user.group ==='') return res.status(200).json({ message: "no tiene" });
  try{
    const group = await GroupModel.findOne({_id:res.locals.user.group})
    res.status(200).json(group.stickyNotes)
  }catch (error) {
    res.status(400).json({ message: "Error, cannot find Stickynote" });
  }
}

const createStickyNote = async (req, res) => {
  try{
    const group = await GroupModel.findOne({_id:res.locals.user.group})
    group.stickyNotes.push(req.body)
    await group.save()
    res.status(200).json(group.stickyNotes.pop())
  } catch (error) {
    res.status(400).json({ message: "Error, cannot create Stickynote" });
  }
}

const updateStickyNote = async (req, res) => {
  try{
    const group = await GroupModel.findOne({_id:res.locals.user.group})
    const note = group.stickyNotes.id(req.params.noteId)
    note.name = req.body.note.name
    note.description = req.body.note.description
    
    await group.save()
    res.status(200).json(group.stickyNotes.id(req.params.noteId))
  }catch(error) {
    res.status(400).json({message: "Error, cannot update"})
  }
}

const deleteStickyNote = async (req, res) => {
  try{
    const group = await GroupModel.findOne({_id:res.locals.user.group})
    group.stickyNotes.remove(req.params.noteId)
    group.save()

    res.status(200).json(group.stickyNotes)
  }catch (error) {
    res.status(400).json({ message: "Error, cannot delete" });
  }
}

module.exports = {
  getStickyNotes,
  createStickyNote,
  updateStickyNote,
  deleteStickyNote
}