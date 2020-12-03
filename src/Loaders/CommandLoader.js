module.exports = class CommandLoader {
    constructor(client) {
        this.client = client;
        
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
                readdir(`./src/Commands/${category}`, (err, cmd) => {
                    cmd.forEach(cmd => {
                        if(err) return console.error(chalk.red.bold(' | [ COMMANDS ]  ' + err))
                        const Command = require(`../Commands/${category}/${cmd}`)
                        delete require.cache[require.resolve(`../Commands/${category}/${cmd}`)]
                        
                        const command = new Command(this)
                        this.client.commands.set(command.commandSettings.name, command)
                        
                        command.commandSettings.aliases.forEach(aliases => this.client.aliases.set(aliases, command.commandSettings.name))
                        
                        console.log(' | ' + chalk.rgb(94, 209, 113).bold('[ COMMANDS ]  ') + cmd.replace('.js', '').replace('Command', '') + ' - Command Loaded with Sucess')
                    })
                })
            })
        })       
    }
}