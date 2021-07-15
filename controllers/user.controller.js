const UserModel = require("../models/auth.model")


const getUser = async (req, res) => {
  const user = await UserModel.findById(res.locals.users)
  res.json({
    user: {
      user
    }
  })
}

module.exports = {
  getUser
}
