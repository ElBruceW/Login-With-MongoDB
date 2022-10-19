const express = require('express')
const path = require('path')
const app = express();
const router = require('./server/routes/login.js')
const session = require("express-session");
const MongoStore = require("connect-mongo");
const db = require('./config/db.js')
const dotenv = require('dotenv')
const passport = require('passport')
dotenv.config()

try {
    db()
} catch (error) {
    console.log(error)
}

app.use(session({
    secret:'llave secreta',
    resave:false,
    saveUninitialized:true,
    store:  MongoStore.create({mongoUrl:process.env.database})
}))

app.use(passport.initialize())
app.use(passport.session())

app.use(express.static('./app/src'))

app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.set('view engine', 'pug')
app.set('views','./app/views'); 

app.use('/', router)
app.listen(3000,() => console.log("Running server"))