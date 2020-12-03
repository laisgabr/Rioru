const { readdir } = require('fs')
const { resolve } = require('path')

module.exports = class EventsLoader {
    constructor(client) {
        this.client = client
        
        try {
            this.StartLoadDiscordEvents()
            return true
        } catch (e) {
            console.error(e)
            return false
        }
    }
    
    StartLoadDiscordEvents(dir = resolve(__dirname, '..', 'Listeners', 'Client')) {
        readdir(dir, (err, files) => {
            if(err) console.error(err)
            
            let jsfiles = files.filter(f => f.split('.').pop() === 'js' || f.split('.').pop() === 'ts')
            
            jsfiles.forEach((filename, info) => {
                const ListenerClass = require(`${dir}/${filename}`)
                delete require.cache[require.resolve(`${dir}/${filename}`)]
                const listener = new ListenerClass(this.client)
                
                console.log(' | [ ' + listener.name + ' ] ' + 'Loaded with sucess')
                this.client.on(listener.name, (...args) => {
                    listener.run(...args)
                })
            })
        });
    }
}
