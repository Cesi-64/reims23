/*** IMPORT */
const express = require('express')
const authCtrl = require('../controllers/auth_c')

/*** EEXPRESS ROUTER */
let router = express.Router()

/*** MIDDLEWARE */
router.use( (req, res, next) => {
    const event = new Date()
    console.log('AUTH Time : ', event.toString())
    next()
})

/*** AUTH ROUTAGE */
router.post('/login', authCtrl.login)

module.exports = router