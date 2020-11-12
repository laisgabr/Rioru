const Command = require('../../Util/Command');

module.exports = class PartyModeCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'party',
            aliases: ['pm', 'festa'],
            description: 'Deixe a música mais estilo de festa/balada',
            category: 'Music',
            voiceChannelOnly: true,
            playerOnly: true,
            queueOnly: true
        })
    }
    run(message, args, t) {
        
    }
}