import { readdir } from 'fs'
import ZoeClient from '../Zoe';

export default class CommandsLoader {
    public client: ZoeClient;
    constructor(client: ZoeClient) {
        this.client = client;
        this.load()
    }
    
    public load() {
        readdir('./src/Commands', (error, f) => {
            if(error) return console.error(error)
            let files = f.filter(f => f.split('.').pop() === 'ts')
            
            files.forEach(category => {
                readdir(`./src/Commands/${category}`, (err, cmd) => {
                    if (err) return console.error(err)
                    
                    cmd.forEach(cmd => {
                        const Command = require(`../Commands/${category}/${cmd}`)
                        delete require.cache[require.resolve(`../Commands/${category}/${cmd}`)]
                        const command = new Command(this.client)
                        
                        this.client.commands.set(command.commandSettings.name, command)
                        
                        command.commandSettings.aliases.forEach((aliases: any) => this.client.aliases.set(aliases, command.commandSettings.name))
                    })
                })
            })
        })
    }
}