const express = require('express')

const userHasGroup = async (req, res, next) => {
  try {
      if (!res.locals.user.group) {
      return res.status(400).json({ message: "You don't belong to a Group" })
    }
    
  } catch (error) {
    return res.status(500).json({ message: 'The service cannot be executed' })
  }
  next()
}

module.exports = {
  userHasGroup
}
