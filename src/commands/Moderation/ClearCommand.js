const Command = require('../../Util/Command');

module.exports = class ClearCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'clear',
            aliases: ['limpar'],
            description: 'Chat floodado/spammado ? Limpe ele',
            category: 'Moderation'
        })
    }
    run(message, args, t) {
        
    }
}