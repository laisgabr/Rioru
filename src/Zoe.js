const { Client, Collection } = require("discord.js")
const { ZoeManager } = require('./Music')
const { Emojis } = require('./Util')
const { Nsfw } = require('./APIs')

const Database = require('./Database/MongoDB')
const Loaders = require('./Loaders')

require('./Music/ZoePlayer')

module.exports = class ZoeClient extends Client {
    constructor(options = {}) {
        super(options)
        
        this.token = options.token

        this.settings = {
            owners: options.owners,
            nodes: options.nodes,
            database: options.database,
            fortniteKey: options.fortniteKey,
            spotifyClientId: options.spotifyClientId,
            spotifyClientSecret: options.spotifyClientSecret,

            emojis: {
                sucess: options.sucess,
                error: options.error
            }
        }

        this.commands = new Collection()
        this.aliases = new Collection()

        this.emoji = new Emojis(this)

        const nodes = this.settings.nodes

        this.music = new ZoeManager({
            nodes,
            autoPlay: true,
            send: (id, payload) => {
              const guild = this.guilds.cache.get(id);
              if (guild) guild.shard.send(payload);
            } 
        })
        this.database = new Database(this)

        this.nsfw = new Nsfw(this)
    }
 
   async initialize() {
        for (const Loader of Object.values(Loaders)) {
            const loader = new Loader(this)
            try {
              await loader.load()
            } catch (e) {
              console.error(e)
            }
        }
        
        setTimeout(() => {
        super.login(this.token)
        return this
        }, 2000)
    }

}