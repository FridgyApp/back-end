const jwt = require('jsonwebtoken')

const createJwt = (id) =>{
  return new Promise((resolve,reject)=>{
    jwt.sign({id}, process.env.SECRET,(err,token)=>{
      if(err) reject(err)
      resolve(token)
    })
  })
}

module.exports = createJwt