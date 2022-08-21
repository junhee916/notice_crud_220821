const express = require('express')
const router = express.Router()
const checkAuth = require('../middleware/check_auth')
const userCtrl = require('../controllers/userController')
// get users
router.get('/', checkAuth, userCtrl.getAll)
// get user
router.get('/:userId', checkAuth, userCtrl.get)
// sign up 
router.post('/signup', userCtrl.signup)
// login
router.post('/login', userCtrl.login)
// update user
router.post('/update/:userId', checkAuth, userCtrl.update)
// delete users
router.post('/delete', checkAuth, userCtrl.deleteAll)
// delete user
router.post('/delete/:userId', checkAuth, userCtrl.delete)
module.exports = router