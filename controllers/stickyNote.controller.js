const {req , res} = require('express');

const StickyNoteModel = require('../models/stickynote.model')

const getStickyNotes = async (req, res ) => {
  try{
    const getNotes = await StickyNoteModel.find()
    res.status(200).json(getNotes)
  }catch (error) {
    console.log('Error', error)
    res.status(400).json({ message: "Error, cannot find Stickynote" });
  }
}

const createStickyNote = async (req, res) => {
  try{
    const createNote = await StickyNoteModel.create(req.body)
    await createNote.save()
    res.status(200).json(createNote)
  }catch (error) {
    console.log('Error', error)
    res.status(400).json({ message: "Error, cannot create Stickynote" });
  }
}
//TERMINAR DELETE 
const deleteStickyNote = async (req , res ) => {
  try{
    const deleteNote = await StickyNoteModel.findByIdAndDelete(req.body.id)
    res.status(200).json(deleteNote)
  }catch (error) {
    console.log('Error', error)
    res.status(400).json({ message: "Error, cannot delete" });
  }
}

const updateStickyNote = async(req,res ) => {
  const { _id , ...restObject } = req.body
  try{
    const updateNote = await StickyNoteModel.findByIdAndUpdate( _id, restObject , {new : true})
    res.status(200).json(updateNote)
  }catch(error) {
    console.log('Error', error)
    res.status(400).json({message: "Error, cannot update"})
  }
}

module.exports = {
  getStickyNotes,
  createStickyNote,
  updateStickyNote,
  deleteStickyNote
}