import { readdir } from "https://deno.land/std@0.78.0/fs/mod.ts"

export default class CommandsLoader {
    constructor(client) {
        this.client = client;
    }

    load() {
        readdir('./src/Commands', (error, f) => {
            let files = f.filter(f => f.split('.').pop() === ('js' && 'ts'))

            files.forEach(category => {
                readdir(`./src/Commands/${category}`, (err, cmd) => {
                    if(err) return console.error(err)


                    cmd.forEach(cmd => {
                        let value = 'js'
                        if(['ts'].includes(cmd)) value = 'ts'

                        import Command from '../Commands/category/cmd.extension'.replace('category', category).replace('cmd', cmd).replace('extension', value)
                        const command = new Command(this.client)

                        this.client.commands.set(command.commandSettings.name, command)

                        command.commandSettings.aliases.forEach(aliases => this.client.aliases.set(aliases, command.commandSettings.name))
                    })
                })
            })
        })
    }
}