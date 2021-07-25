const UserModel = require("../models/auth.model")


const getUser = async (req, res) => {
  const user = await UserModel.findById(res.locals.user.id)
  res.json({
    user: {
      user
    }
  })
}

module.exports = {
  getUser
}
