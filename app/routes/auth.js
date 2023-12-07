const express = require('express')
const router = express.Router()

const loginCtrl = require('../controlles/auth')
const registerCtrl = require('../controlles/auth')

//probando la ruta api/1.0/auth
router.post('/login', loginCtrl.loginCtrl)
router.post('/register', registerCtrl.registerCtrl)
/** */

module.exports = router