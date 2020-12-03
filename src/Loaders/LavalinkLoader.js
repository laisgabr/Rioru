const { readdir } = require('fs')
const { resolve } = require('path')

module.exports = class LavalinkLoader {
    constructor(client) {
        this.client = client;
        
        try {
            this.loadEvents()
            return true
        } catch (e) {
            console.error(e)
            return false
        }
    }
    
    loadEvents(dir = resolve(__dirname, '..', 'Listeners', 'Lavalink')) {
        readdir(dir, (err, files) => {
            if(err) console.error(err)
            
            let jsfiles = files.filter(f => f.split('.').pop() === 'js' || f.split('.').pop() === 'ts')
            
            jsfiles.forEach((filename, info) => {
                const ListenerClass = require(`${dir}/${filename}`)
                delete require.cache[require.resolve(`${dir}/${filename}`)]
                const listener = new ListenerClass(this.client)
                
                console.log(' | [ ' + listener.name + ' ] ' + 'Loaded with sucess')
                /*  this.client.music.on(listener.name, (...args) => {
                    listener.run(...args)
                })
                */
            })
        });
    }
}