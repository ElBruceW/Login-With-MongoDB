const Usuario = require('../models/Usuario.js')
const passport = require('../../config/passport.js')
exports.formRegistrarCuenta = (req,res) => {
    res.render('register')
}
passport
exports.RegistrarCuenta =async (req,res,next) => {
    const user = new Usuario(req.body)

    const saveUser = await user.save()

    if(!saveUser) return next

    res.redirect('/login')
}



//passport

exports.autenticar = () => {
    return passport.authenticate('local',{
        failureRedirect: '/error',
        successRedirect: '/correct'
    })
}