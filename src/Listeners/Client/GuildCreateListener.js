const { Listener } = require('../../')

module.exports = class GuildCreateListener extends Listener {
    constructor(client) {
        super(client, {
            name: 'guildCreate'
        })
    }
    
    async run(guild) {
        this.client.createMessage('779432421149900830', {
            
        })
    }
}