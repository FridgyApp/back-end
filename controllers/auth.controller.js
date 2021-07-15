const { response } = require('express')
const UserModel = require('../models/auth.model')
const bcrypt = require('bcrypt')
const createJwt = require('../helpers/JWT')
const {googleVerify} = require('../helpers/google-verify')

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

const googleSignIn = async(req, res = response) => {
  
  const {id_token} = req.body
  
  try{
    const {name, photo, email} = await googleVerify( id_token );

    let user = await UserModel.findOne({ email });

    if( !user) {
      //create user
      const data = {
        name, 
        email,
        password: '',
        photo,
        google: true
      };

      user = new UserModel (data);
      await user.save();
    }

    // create JWT
    const token = await createJwt(user._id)
    res.status(200).json({
      user,
      token
    })


    res.json({
      msg: 'Todo ok google sign in ! ',
      googleUser
    });
  }catch (error){
    res.status(400).json({
      msg: 'Token is not valid'
    })
  }

}

module.exports = {
  signup,
  login,
  googleSignIn
}