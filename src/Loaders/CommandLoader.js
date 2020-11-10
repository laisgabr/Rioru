const { Loader } = require('../Util')

module.exports = class CommandLoader extends Loader {
    load() {
        try {
            this.startLoadCommands()
            return true
        } catch (e) {
            console.error(e)
            return false
        }
    }

    startLoadCommands() {
        const { readdir } = require('fs')
        const chalk = require('chalk')

        console.log(' | [ COMMANDS ]  Start load Commands, Wait...')  
        readdir('./src/Commands', (err, f) => {
            if (err) return console.error(chalk.red.bold(' | [ COMMANDS ]  ' + err))
            
            f.forEach(category => {
                readdir(`./src/commands/${category}`, (err, cmd) => {
                    cmd.forEach(cmd => {
                        if(err) return console.error(chalk.red.bold(' | [ COMMANDS ]  ' + err))
                        
                        const Command = require(`../commands/${category}/${cmd}`)
                        delete require.cache[require.resolve(`../commands/${category}/${cmd}`)]
                        
                        const command = new Command(this)
                        this.client.commands.set(command.config.name, command)
                        command.config.aliases.forEach(aliases => this.client.aliases.set(aliases, command.config.name))
                        console.log(' | ' + chalk.rgb(94, 209, 113).bold('[ COMMANDS ]  ') + cmd.replace('.js', '') + ' - Command Loaded with Sucess')
                    })
                })
            })
        })       
    }
}