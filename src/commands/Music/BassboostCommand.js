const Command = require('../../Util/Command');

module.exports = class BassBoostCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'bassboost',
            aliases: ['bs'],
            description: 'Faz a música ficar mais agitada',
            category: 'Music',
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