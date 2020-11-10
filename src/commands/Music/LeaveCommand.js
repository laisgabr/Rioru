const Command = require('../../Util/Command');

module.exports = class LeaveCommand extends Command {
    constructor(client) {
        super(client, {
            name: '',
            aliases: [],
            description: '',
            category: ''
        })
    }
    run(message, args, t) {
        message.react('👋')
        
        this.client.players.get(message.guild.id).destroy()
    }
}