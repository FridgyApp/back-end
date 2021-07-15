const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  name:{
    type: String,
    required: [true, 'Nombre es obligatorio']
  },
  email:{
    type: String,
    required: [true, 'Nombre es obligatorio'],
    unique: [true, 'usuario ya registrado']
  },
  photo:{
    type: String,
  },
  password:{
    type: String,
    required: [true, 'debe tener una contraseña'],
    minlength: [6,'Tiene que ser mayor 6 de caracteres' ],
    trim: true
  },
  group:[{
    type: String
  }],
  google:{
    type: Boolean,
    default: false
  }
})

const UserModel = mongoose.model('users',UserSchema)

module.exports = UserModel
