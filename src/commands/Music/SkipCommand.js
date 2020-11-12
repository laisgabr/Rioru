const Command = require('../../Util/Command');

module.exports = class SkipCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'skip',
            aliases: ['pular'],
            description: 'Pula a música atual',
            category: 'Music',
            voiceChannelOnly: true,
            playerOnly: true,
            queueOnly: true,
        })
    }
    run(message, args, t) {
        
    }
}