const Command = require('../../Util/Command');

module.exports = class KickCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'kick',
            aliases: ['expulsar', 'kickar'],
            description: 'Vamos dar um sustinho no Membro Comum ?',
            category: 'Moderation'
        })
    }
    run(message, args, t) {
        
    }
}