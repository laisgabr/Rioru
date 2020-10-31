const { Client, Collection } = require("discord.js")
const { readdir } = require("fs")

require("dotenv").config()
const chalk = require('chalk')

const { connect, model } = require('mongoose')
const { Manager } = require('erela.js')

require('./Util/Music/ZoePlayer')

module.exports = class ZoeClient extends Client {
    constructor(options = {}) {
        super(options)
        
        this.token = options.token

        this.settings = {
            owners: options.owners,
            nodes: options.nodes,
            database: options.database,
            fortniteKey: options.fortniteKey,
            spotifyClientId: options.spotifyClientId,
            spotifyClientSecret: options.spotifyClientSecret,
            
            emojis = {
                sucess: options.sucess,
                error: options.error
            }
        }

        this.commands = new Collection()
        this.aliases = new Collection()

        const nodes = this.settings.nodes

        this.music = new Manager({
            plugins: [],
            nodes,
            autoPlay: true,
            send: (id, payload) => {
              const guild = this.guilds.cache.get(id);
              if (guild) guild.shard.send(payload);
            } 
        })

        this.database = connect(this.settings.database, { useNewUrlParser: true, useUnifiedTopology: true }, e => {
          if(e) return console.log(' | ' + chalk.red.bold('[ MONGOOSE ]  ') + `Um erro ocorreu!, ${e}`)
          console.log(" | " + `${chalk.rgb(94, 209, 113).bold('[ MONGOOSE ] ')} - Conexão com o MongoDB feita com sucesso`)
        })
        this.database = {
            UserSchema: model("UserSchema", require('./Models/UserSchema')),
            GuildSchema: model("GuildSchema", require(`./Models/GuildSchema`)),
            KeySchema: model("KeySchema", require('./Models/KeySchema'))
        }
        return this
    };
 

    start() {
        super.login(this.token)
        return this
    }

    loadCommands (path) {
       console.log(' | [ COMMANDS ]  Start load Commands, Wait...')  
        readdir(path, (err, f) => {
            if (err) return console.error(chalk.red.bold(' | [ COMMANDS ]  ' + err))
            f.forEach(category => {
                readdir(`./${path}/${category}`, (err, cmd) => {
                    cmd.forEach(cmd => {
                       if(err) return console.error(chalk.red.bold(' | [ COMMANDS ]  ' + err))
                        const Command = require(`.${path}/${category}/${cmd}`)
                        delete require.cache[require.resolve(`.${path}/${category}/${cmd}`)]
                        const command = new Command(this)
                        this.commands.set(command.config.name, command)
                        command.config.aliases.forEach(aliases => this.aliases.set(aliases, command.config.name))
                        console.log(' | ' + chalk.rgb(94, 209, 113).bold('[ COMMANDS ]  ') + cmd.replace('.js', '') + ' - Command Loaded with Sucess')
                    })
                })
            })
        })
    }

    loadEvents (path) {
        readdir(path, (err, f) => {
            if (err) return console.error(chalk.red.bold(' | [ CLIENT EVENTS ]  ' + err))
            f.forEach(events => {
                const Event = require(`../${path}/${events}`)
                delete require.cache[require.resolve(`../${path}/${events}`)]
                const event = new Event(this)
                super.on(events.split(".")[0], (...args) => event.run(...args))
                console.log(' | ' + chalk.rgb(94, 209, 113).bold('[ CLIENT EVENTS ]  ') + events.replace('.js', '') + ' | Discord Event Loaded with Sucess')
            })
        })

        return this
    }

    loadLavalinkEvents (path) {
        readdir(path, (err, f) => {
            if (err) return console.error(chalk.red.bold(' | [ LAVALINK EVENTS ]  ' + err))
            f.forEach(events => {
                const Event = require(`../${path}/${events}`)
                delete require.cache[require.resolve(`../${path}/${events}`)]
                const event = new Event(this)
                this.music.on(events.split(".")[0], (...args) => event.run(...args))
                console.log(' | ' + chalk.rgb(94, 209, 113).bold('[ LAVALINK EVENTS ]  ') + events.replace('.js', '') + ' | Lavalink Event Loaded with Sucess')
            })
        })

        return this
    }

}
