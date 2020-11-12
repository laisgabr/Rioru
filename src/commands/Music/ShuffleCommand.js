const Command = require('../../Util/Command');

module.exports = class ShuffleCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'shuffle',
            aliases: ['embaralhar'],
            description: 'Embaralha a Lista de Reprodução',
            category: 'Music',
            voiceChannelOnly: true,
            playerOnly: true,
            queueOnly: true
        })
    }
    run(message, args, t) {
        
    }
}