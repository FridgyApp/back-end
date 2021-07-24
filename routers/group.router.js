const GroupRouter = require('express').Router()

const { 
createGroup,
getGroup,
addUserGroup
} = require('../controllers/group.controller')

const {
  validateJwt
} = require('../middlewares/validateJWT')

const {
  userHasGroup
} = require('../middlewares/userHasGroup')

GroupRouter 
  .get('/', validateJwt, getGroup)
  .post('/', validateJwt, createGroup)
  .put('/', validateJwt, userHasGroup, addUserGroup)


module.exports = GroupRouter 