const { request } = require('express')
const jwt = require('jsonwebtoken')

const validateJwt = (req = request, res, next) => {
  const token = req.headers.authorization.split(' ')[1]
  // const token = req.header('token')
  if (!token) return res.status(400).json({ msg: 'No tienes Permisos' })

  try {
    const vista = jwt.verify(token, process.env.SECRET)
  } catch (error) {
    return res.status(500).json({ msg: 'No Se puede ejecutar el servicio' })
  }
  next()
}

module.exports = {
  validateJwt
}
