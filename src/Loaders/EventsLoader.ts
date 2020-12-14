import ZoeClient from "../Zoe";
import { readdir } from 'fs'

export default class EventsLoader {
    public client: ZoeClient;
    constructor(client: ZoeClient) {
        this.client = client;
        this.load()
    }
    
    public load() {
        readdir('./src/Listeners/Client', (error, files) => {
            if(error) return console.error(error)
            
            let filter = files.filter(f => f.split('.').pop() === 'ts')
            
            filter.forEach((filename, info) => {
                const ListenerClass = require(`../Listeners/Client/${filename}`)
                delete require.cache[require.resolve(`../Listeners/Client/${filename}`)]
                const listener = new ListenerClass(this.client)
                
                console.log(' | [ ' + listener.name + ' ] ' + 'Loaded with sucess')
                this.client.on(listener.name, (...args) => {
                    listener.run(...args)
                })
            })
        });
    }
}