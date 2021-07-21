const {req , res} = require('express');
const GroupModel = require('../models/group.model')

const getStickyNotes = async (req, res ) => {
  try{
    const group = await GroupModel.findOne(res.locals.user.group)
    res.status(200).json(group.stickyNotes)
  }catch (error) {
    res.status(400).json({ message: "Error, cannot find Stickynote" });
  }
}

const createStickyNote = async (req, res) => {
  try{
    console.log(res.locals.user)
    const group = await GroupModel.findOne(res.locals.user.group)
    console.log(group)
    group.stickyNotes.push(req.body)
    await group.save()
    res.status(200).json(group.stickyNotes.pop())
  } catch (error) {
    res.status(400).json({ message: "Error, cannot create Stickynote" });
  }
}

const updateStickyNote = async (req, res) => {
  try{
    const group = await GroupModel.findOne(res.locals.user.group)
    const note = group.stickyNotes.id(req.params.noteId)
    note.name = req.body.name
    note.description = req.body.description
    
    await group.save()
    res.status(200).json(group.stickyNotes.id(req.params.noteId))
  }catch(error) {
    console.log('Error', error)
    res.status(400).json({message: "Error, cannot update"})
  }
}

const deleteStickyNote = async (req, res) => {
  try{
    const group = await GroupModel.findOne(res.locals.user.group)
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