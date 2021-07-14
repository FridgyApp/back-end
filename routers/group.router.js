const GroupRouter = require('express').Router()

const { 
createGroup,
getGroup
} = require('../controllers/group.controller')


GroupRouter 
  .get('/', getGroup)
  .post('/', createGroup)

module.exports = GroupRouter 