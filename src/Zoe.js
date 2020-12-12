import { Client } from "https://raw.githubusercontent.com/ayntee/dencord/main/mod.ts"
import { Collection } from "https://deno.land/x/discordeno@9.4.0/mod.ts"
import * as Loaders from "./Loaders";
import MySQLServer from './Database/MySQL.ts'


export default class ZoeClient extends Client {
    constructor(token, options = {}, settings = {}) {
        super(token, options)
        
        if(!token) throw new Error('You need pass the token')
        
        this.settings = {
            database: {
                database: settings.database,
                host: settings.host,
                username: settings.username,
                password: settings.password,
                port: settings.port
            },
        }
        
        this.commands = new Collection()
        this.aliases = new Collection()
        this.cooldown = new Collection()
        
        this.database = new MySQLServer(this)
        this.zoeEmojis = new ZoeEmojis
    }
    
    start() {
        for(const Loader of Object.values(Loaders)) {
            try {
                new Loader(this)
            } catch (e) {
                return console.error(e)
            }
        }
        super.start()
        return this
    }
}
