const { Listener } = require('../../')

module.exports = class GuildDeleteListener extends Listener {
    constructor(client) {
        super(client, {
            name: 'guildDelete'
        })
    }
    
    async run(guild) {
        const db = await this.client.database.GuildSchema.findOne({ '_id': guild.id })
        
        if(db) {
            return this.client.database.GuildSchema.remove({ '_id': guild.id })
        } 
        
        if(!db) return;
    }
}