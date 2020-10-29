const Command = require('../../Util/Command');

module.exports = class BassBoostCommand extends Command {
    constructor(client) {
        super(client, {
            name: '',
            aliases: [],
            description: '',
            category: '',
            voiceChannelOnly: true, 
            playerOnly: true,
            queueOnly: true
        })
    }
    run(message, args, t) {
        const player = this.client.music.players.get(message.guild.id)

        player.setBassboost(!player.setBassboost())
    }
}