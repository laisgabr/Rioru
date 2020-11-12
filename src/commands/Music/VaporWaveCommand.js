const Command = require('../../Util/Command');

module.exports = class VaporWaveCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'vaporwave',
            aliases: ['vw'],
            description: 'Deixe a música mais estilo vaporwave',
            category: 'Music',
            voiceChannelOnly: true,
            playerOnly: true,
            queueOnly: true
        })
    }
    run(message, args, t) {
        
    }
}