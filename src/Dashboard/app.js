module.exports = class Dashboard {
    constructor(client) {
        this.client = client
    }

    startDashboard() {
    require('./strategies/discord')
    const express = require('express')
    const app = express()
    const path = require("path")

    const client = require('../../index')
    const session = require("express-session")
    const mongoose = require("mongoose")
    const StoreMongo = require("connect-mongo")(session)

    const passport = require("passport")
    const index = require('./routes/index')

    app.use(session({ 
        secret: 'keyboard cat',
        cookie: {
            maxAge: 60000 * 60 * 24
        },
        resave: false,
        saveUninitialized: false,
        store: new StoreMongo({ mongooseConnection: mongoose.connection }) 
    }))

    app.use(passport.initialize())
    app.use(passport.session())

    app.set("views", path.join(__dirname, "/views"))
    app.use(express.static(path.join(__dirname, "/public")))

    app.engine("html", require("ejs").renderFile)
    app.set("view engine", "ejs")

    app.use(express.json())
    app.use(express.urlencoded({ extended: true }))

    app.use('/', index) 

    app.listen(3000, () => console.log('Dashboard started'))
    }
}