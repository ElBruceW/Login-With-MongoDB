const express = require('express')
const loginController = require('../controllers/loginController.js')
const router = express.Router()


router.get('/login', (req,res) => {
    res.render("login")
})

router.post('/login', loginController.autenticar())
router.get('/register', loginController.formRegistrarCuenta)

router.post('/register',loginController.RegistrarCuenta)

module.exports = router
