const Command = require('../../Util/Command');

module.exports = class ResumeCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'resume',
            aliases: ['retomar'],
            description: 'Retome a música que foi pausada',
            category: 'Music',
            voiceChannelOnly: true,
            playerOnly: true,
            queueOnly: true
        })
    }
    run(message, args, t) {
        
    }
}