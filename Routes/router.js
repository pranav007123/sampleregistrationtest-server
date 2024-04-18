const express = require('express')
const userController = require('../Controllers/userController')
const router = new express.Router()

// register
router.post('/register',userController.register)
router.get('/all-users',userController.getallusers)

module.exports = router