const Command = require('../../Util/Command');

module.exports = class VolumeCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'volume',
            aliases: [],
            description: 'Quer diminuir o volume ? Use isso',
            category: 'Music',
            voiceChannelOnly: true,
            playerOnly: true,
            queueOnly: true
        })
    }
    run(message, args, t) {
        
    }
}