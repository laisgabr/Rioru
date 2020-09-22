const { Command } = require('../../structure')

module.exports = class AddEmojiCommand extends Command {
    constructor (client) {
        super(client, {
            name: 'emoji',
            aliases: ['emote'],
            category: 'Administration'
       })
    }
    run ({ channel, guild }) {
    channel.send("Calma ai... Está em produção...")    
    }
}
