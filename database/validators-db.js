const UserModel = require("../models/auth.model")


const isEmail = async(email) =>{

  const isEmail = await UserModel.findOne({email})
  if(isEmail) throw new Error(`El email esta en uso`)

}

module.exports ={
  isEmail
}