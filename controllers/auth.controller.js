const { response } = require('express')
const UserModel = require('../models/auth.model')
const bcrypt = require('bcrypt')
const createJwt = require('../helpers/JWT')

const signup = async (req, res = response) => {
  const { password } = req.body
  try {
    const bash = await bcrypt.hash(password, 10)
    req.body.password = bash
    const newUser = await UserModel.create(req.body)
    res.json({
      msg: 'Creado bien'
    })
  } catch (error) {
    res.json({
      msg: error
    })
  }

}

const login = async (req, res = response) => {
  const { email, password } = req.body
  try {
    const findUser = await UserModel.findOne({ email })
    if (!findUser) return res.status(400).json({ msg: 'Usuario o contraseña son invalido' })

    // Verify password
    const validatePass = bcrypt.compareSync(password, findUser.password)
    if (!validatePass) return res.status(400).json({ msg: 'Usuario o contraseña son invalido' })

    // create JWT
    const token = await createJwt(findUser._id)
    res.status(200).json({
      uid: findUser._id,
      token
    })
  } catch (error) {
    return res.status(500).json({ msg: 'No se puede ejecutar dicha operacion' })
  }
}

const googleSignIn = (req, res = response) => {
  const { id_token } = req.body
  res.json({
    msg: 'Todo ok google sign in ! ',
    id_token
  });

}

module.exports = {
  signup,
  login,
  googleSignIn
}