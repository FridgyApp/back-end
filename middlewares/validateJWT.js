const { request } = require('express')
const jwt = require('jsonwebtoken')
const User = require('../models/auth.model')

const validateJwt = async (req, res, next) => {
  const token = req.headers.authorization || req.headers.token
  // const token = req.header('token')
  if (!token) return res.status(400).json({ message: 'No tienes Permisos' })

  try {
    const { id } = await jwt.verify(token, process.env.SECRET)

    const user = await User.findById(id)

    res.locals.user = user
  } catch (error) {
    return res.status(500).json({ message: 'No Se puede ejecutar el servicio' })
  }
  next()
}

module.exports = {
  validateJwt
}
