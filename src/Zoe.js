import { Client } from "https://raw.githubusercontent.com/ayntee/dencord/main/mod.ts"
import { Collection } from "https://deno.land/x/discordeno@9.4.0/mod.ts"

export default class ZoeClient extends Client {
    constructor(token, options = {}, settings = {}) {
        super(token, options)
        this.token = token;
        
        this.settings = {
            database: settings.database,

        }

        this.commands = new Collection()
        this.aliases = new Collection()
        this.cooldown = new Collection()
    }

    start() {
        for(const Loader of Object.values(Loaders)) {
            
        }
        super.start()
        return this
    }
}
