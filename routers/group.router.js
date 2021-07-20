const GroupRouter = require('express').Router()

const { 
createGroup,
getGroup
} = require('../controllers/group.controller')

const {
  validateJwt
} = require('../middlewares/validateJWT')

GroupRouter 
  .get('/', getGroup)
  .post('/', validateJwt, createGroup)

module.exports = GroupRouter 