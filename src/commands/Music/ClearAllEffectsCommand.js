const Command = require('../../Util/Command');

module.exports = class ClearAllEffectsCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'cleareffects',
            aliases: ['limparefeitos', 'clearalleffects'],
            description: 'Limpe todos os efeitos colocados na música',
            category: 'Music',
            voiceChannelOnly: true,
            playerOnly: true,
            queueOnly: true
        })
    }
    run(message, args, t) {
        const player = this.client.music.players.get(message.guild.id)
        player.clearEffects()
    }
}