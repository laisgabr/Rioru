const { Listener } = require('../../')

module.exports = class GuildCreateListener extends Listener {
    constructor(client) {
        super(client, {
            name: 'guildCreate'
        })
    }
    
    async run(guild) {
        const db = await this.client.database.GuildSchema.findOne({ '_id': guild.id })
        if(db) {
            return; 
        } else this.client.database.GuildSchema.create({ '_id': guild.id })
    }
}