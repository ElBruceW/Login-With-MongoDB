const moongose = require('mongoose');
const bcrypt = require('bcrypt');
const usuario = new moongose.Schema({
    username:{
        type: String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type: String,
        required:true
    }
})
usuario.pre('save', async (next) => {
    try {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(`${this.password}`, salt);
        return next();
      } catch (err) {
        return next(err);
      }
})

module.exports = moongose.model('usuarios',usuario)