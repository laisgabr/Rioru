const { Listener } = require('../../')

module.exports = class MessageUpdateListener extends Listener  {
    constructor(client) {
        super(client, {
            name: 'messageUpdate'
        })
    }
    
    async run(message, oldMessage) {
        if(message.content === oldMessage.content) return;
        
        const db = await this.client.database.GuildSchema.findOne({ '_id': message.channel.guild.id })
        if(!db) return this.client.database.GuildSchema.create({ '_id': message.channel.guild.id })
        
        
    }
}