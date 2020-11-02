module.exports = class MongoDB {
    constructor(client) {
        this.client = client

        const { connect, model } = require('mongoose')
        const chalk = require('chalk')

        connect(this.client.settings.database, { useNewUrlParser: true, useUnifiedTopology: true }, e => {
            if(e) return console.log(' | ' + chalk.red.bold('[ MONGOOSE ]  ') + `Um erro ocorreu!, ${e}`)
            console.log(" | " + `${chalk.rgb(94, 209, 113).bold('[ MONGOOSE ] ')} - Conexão com o MongoDB feita com sucesso`)
          })
          this.database = {
              UserSchema: model("UserSchema", require('./Models/UserSchema')),
              GuildSchema: model("GuildSchema", require('./Models/GuildSchema')),
              KeySchema: model("KeySchema", require('./Models/KeySchema'))
          }
        return this
    }    
}