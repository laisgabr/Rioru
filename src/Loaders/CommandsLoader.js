import readdir from "https://deno.land/std@0.78.0/fs/mod.ts"

export default class CommandsLoader {
    constructor(client) {
        this.client = client;
        this.load()
    }

    load() {
        readdir('./src/Commands', (error, f) => {
            let files = f.filter(f => f.split('.').pop() === ('js' && 'ts'))

            files.forEach(category => {
                readdir(`./src/Commands/${category}`, (err, cmd) => {
                    if (err) return console.error(err)

                    console.log(cmd)
                    /*cmd.forEach(cmd => {
                        let value = 'js'
                        if(['ts'].includes(cmd)) value = 'ts'
                        const string = "../Commands/${category}/${cmd}.ts".replace('${cmd}', cmd).replace('${category}', category)

                        import * as Command from string;
                        const command = new Command(this.client)

                        this.client.commands.set(command.commandSettings.name, command)

                        command.commandSettings.aliases.forEach(aliases => this.client.aliases.set(aliases, command.commandSettings.name))
                    })
                })
                */

                })
            })
        })
    }
}