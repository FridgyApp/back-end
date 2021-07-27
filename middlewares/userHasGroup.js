
const userHasGroup = async (req, res, next) => {

  if (!res.locals.user.group && res.locals.user.group === '') {
    return res.status(400).json({ message: "You don't belong to a Group" })
  }
  next()
}

module.exports = {
  userHasGroup
}
