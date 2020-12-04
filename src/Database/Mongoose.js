module.exports = class Mongoose {
  constructor(client, mongo) {
    this.client = client;
    
    const { connect, model } = require('mongoose')
    const chalk = require('chalk')
    
    connect(mongo, { useNewUrlParser: true, useUnifiedTopology: true }, e => {
      if(e) return console.log(' | ' + chalk.red.bold('|  [ MONGOOSE ]  ') + `|  Um erro ocorreu!, ${e}`)
      console.log(" | " + `${chalk.rgb(94, 209, 113).bold('|  [ MONGOOSE ] ')} | Conexão com o MongoDB feita com sucesso`)
    })
    
    return {
      ...this,
      UserSchema: model("UserSchema", require('./Models/UserSchema')),
      GuildSchema: model("GuildSchema", require('./Models/GuildSchema')),
      KeySchema: model("KeySchema", require('./Models/KeySchema'))
    }
  }
}