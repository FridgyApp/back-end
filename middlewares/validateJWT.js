const { request } = require('express')
const jwt = require('jsonwebtoken')

const validateJwt = async (req, res, next) => {
  const token = req.headers.authorization
  // const token = req.header('token')
  if (!token) return res.status(400).json({ msg: 'No tienes Permisos' })

  try {
    const { id } = await jwt.verify(token, process.env.SECRET)
    res.locals.users = id
  } catch (error) {
    return res.status(500).json({ msg: 'No Se puede ejecutar el servicio' })
  }
  next()
}

module.exports = {
  validateJwt
}
